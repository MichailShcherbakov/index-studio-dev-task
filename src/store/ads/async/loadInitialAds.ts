import { put, select } from "redux-saga/effects";
import { requestAdsAction } from "../actions";
import { RootState } from "~/store";

export function* loadInitialAds() {
  const currentPage: number = yield select(
    (state: RootState) => state.ads.page,
  );

  // the initial page already has been loaded
  if (currentPage !== 0) return;

  yield put({
    type: requestAdsAction.type,
    payload: {
      // loading the first page
      page: 1,
    },
  });
}
