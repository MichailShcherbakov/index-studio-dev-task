import { PayloadAction } from "@reduxjs/toolkit";
import {
  RequestAdsOptions,
  appendAdsAction,
  setAdsAction,
  setRequestStatusAction,
} from "../actions";
import { AdsApi, GetAdsResult } from "~/api/ads";
import { call, put } from "redux-saga/effects";
import { RequestStatusEnum } from "../type";

export function* getAds(action: PayloadAction<RequestAdsOptions>) {
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
