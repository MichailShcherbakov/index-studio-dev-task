import { all, fork, takeLatest } from "redux-saga/effects";
import {
  loadCurrentAdAction,
  loadInitialAdsAction,
  requestAdsAction,
  setAdMetadataAction,
  setAdsViewingSettingsAction,
} from "../actions";
import { getAds } from "./getAds";
import {
  loadAdsViewingSettings,
  saveAdsViewingSettingsToLocalStorage,
} from "./adsViewingSettings";
import { loadAdsMetadata, saveAdsMetadataToLocalStorage } from "./adsMetadata";
import { loadInitialAds } from "./loadInitialAds";
import { getAdAsCurrentAd } from "./getAdAsCurrentAd";

export function* adsActionWatcher() {
  yield all([
    // init state
    fork(loadAdsMetadata),
    fork(loadAdsViewingSettings),
    takeLatest(loadInitialAdsAction.type, loadInitialAds),
    takeLatest(loadCurrentAdAction.type, getAdAsCurrentAd),
    // request
    takeLatest(requestAdsAction.type, getAds),
    // sync with local storage
    takeLatest(
      setAdsViewingSettingsAction.type,
      saveAdsViewingSettingsToLocalStorage,
    ),
    takeLatest(setAdMetadataAction.type, saveAdsMetadataToLocalStorage),
  ]);
}
