import { all, call } from "redux-saga/effects";
import { adsActionWatcher } from "./ads/async";

export function* rootSaga() {
  yield all([call(adsActionWatcher)]);
}
