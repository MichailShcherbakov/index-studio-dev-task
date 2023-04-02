import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { AdsApi, GetAdResult } from "~/api/ads";
import { Ad, RequestStatusEnum } from "../type";
import { setCurrentAdAction, setRequestStatusAction } from "../actions";

export function* getAdAsCurrentAd(action: PayloadAction<{ id: Ad["id"] }>) {
  try {
    const result: GetAdResult = yield call(AdsApi.getAd, {
      id: action.payload.id,
    });

    yield put({
      type: setCurrentAdAction.type,
      payload: { ad: result },
    });

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
