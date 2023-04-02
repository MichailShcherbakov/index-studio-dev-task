import { all, takeLatest } from "redux-saga/effects";
import {
  loadCurrentAdAction,
  loadInitialAdsAction,
  loadAdsMetadataAction,
  loadAdsViewingSettingsAction,
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
    takeLatest(loadInitialAdsAction.type, loadInitialAds),
    takeLatest(loadAdsMetadataAction.type, loadAdsMetadata),
    takeLatest(loadAdsViewingSettingsAction.type, loadAdsViewingSettings),
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
