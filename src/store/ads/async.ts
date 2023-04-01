import { all, takeLatest, call, put, fork } from "redux-saga/effects";
import {
  RequestAdsOptions,
  appendAdsAction,
  requestAdsAction,
  setAdsAction,
  setRequestStatusAction,
} from "./actions";
import { AdsApi, GetAdsResult } from "~/api/ads";
import { PayloadAction } from "@reduxjs/toolkit";
import { RequestStatusEnum } from "./type";

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
      page: 1, // loading the first page
    },
  });
}

export function* adsActionWatcher() {
  yield all([fork(loadInitialAds), takeLatest(requestAdsAction.type, getAds)]);
}
