import { all, takeLatest, call, put, fork, select } from "redux-saga/effects";
import {
  RequestAdsOptions,
  appendAdsAction,
  requestAdsAction,
  setAdMetadataAction,
  setAdsAction,
  setAdsMetadataAction,
  setAdsViewingSettingsAction,
  setRequestStatusAction,
} from "./actions";
import { AdsApi, GetAdsResult } from "~/api/ads";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  Ad,
  AdMetadata,
  AdMetadataCollection,
  AdsViewingSettings,
  RequestStatusEnum,
} from "./type";
import { RootState } from "..";

function* getAds(action: PayloadAction<RequestAdsOptions>) {
  try {
    const result: GetAdsResult = yield call(AdsApi.getAds, {
      page: action.payload.page,
    });

    if (action.payload?.loadMore) {
      yield put({
        type: appendAdsAction.type,
        payload: { ads: result.items, page: result.page, pages: result.pages },
      });
    } else {
      yield put({
        type: setAdsAction.type,
        payload: { ads: result.items, page: result.page, pages: result.pages },
      });
    }

    yield put({
      type: setRequestStatusAction.type,
      payload: { status: RequestStatusEnum.FULFILLED },
    });
  } catch (error) {
    console.error(error);

    yield put({
      type: setRequestStatusAction.type,
      payload: { status: RequestStatusEnum.REJECTED },
    });
  }
}

function* loadInitialAds() {
  yield put({
    type: requestAdsAction.type,
    payload: {
      // loading the first page
      page: 1,
    },
  });
}

const ADS_VIEW_SETTINGS = "ADS_VIEW_SETTINGS";

function* loadInitialAdsViewingSettings() {
  const rawViewingSettings = localStorage.getItem(ADS_VIEW_SETTINGS);

  const viewingSettings = rawViewingSettings
    ? (JSON.parse(rawViewingSettings) as AdsViewingSettings)
    : null;

  yield put({
    type: setAdsViewingSettingsAction.type,
    payload: {
      settings: viewingSettings ?? {},
    },
  });
}

function* saveAdsViewingSettingsToLocalStorage() {
  const viewingSettings: AdsViewingSettings = yield select(
    (state: RootState) => state.ads.viewingSettings,
  );

  const rawViewingSettings = JSON.stringify(viewingSettings);

  localStorage.setItem(ADS_VIEW_SETTINGS, rawViewingSettings);
}

const ADS_METADATA = "ADS_METADATA";

function* loadInitialAdsMetadata() {
  const rawAdsMetadata = localStorage.getItem(ADS_METADATA);

  const adsMetadata = rawAdsMetadata
    ? (JSON.parse(rawAdsMetadata) as AdMetadataCollection)
    : null;

  yield put({
    type: setAdsMetadataAction.type,
    payload: {
      metadata: adsMetadata ?? {},
    },
  });
}

function* saveAdsMetadataToLocalStorage() {
  const metadata: AdMetadata = yield select(
    (state: RootState) => state.ads.metadata,
  );

  const rawMetadata = JSON.stringify(metadata);

  localStorage.setItem(ADS_METADATA, rawMetadata);
}

export function* adsActionWatcher() {
  yield all([
    fork(loadInitialAds),
    fork(loadInitialAdsMetadata),
    fork(loadInitialAdsViewingSettings),
    takeLatest(requestAdsAction.type, getAds),
    takeLatest(
      setAdsViewingSettingsAction.type,
      saveAdsViewingSettingsToLocalStorage,
    ),
    takeLatest(setAdMetadataAction.type, saveAdsMetadataToLocalStorage),
  ]);
}
