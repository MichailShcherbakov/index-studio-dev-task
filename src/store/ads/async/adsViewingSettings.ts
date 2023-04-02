import { put, select } from "redux-saga/effects";
import { setAdsViewingSettingsAction } from "../actions";
import { AdsViewingSettings } from "../type";
import { RootState } from "~/store";

export const ADS_VIEW_SETTINGS = "ADS_VIEW_SETTINGS";

function getAndParseViewSettingsFromLocalStorage() {
  const rawViewingSettings = localStorage.getItem(ADS_VIEW_SETTINGS);

  return rawViewingSettings
    ? (JSON.parse(rawViewingSettings) as AdsViewingSettings)
    : null;
}

export function* loadAdsViewingSettings() {
  const settings = getAndParseViewSettingsFromLocalStorage();

  yield put({
    type: setAdsViewingSettingsAction.type,
    payload: {
      settings: settings ?? {},
    },
  });
}

export function* saveAdsViewingSettingsToLocalStorage() {
  const settings: AdsViewingSettings = yield select(
    (state: RootState) => state.ads.viewingSettings,
  );

  const existsSettings = getAndParseViewSettingsFromLocalStorage();

  const rawViewingSettings = JSON.stringify({ ...existsSettings, ...settings });

  localStorage.setItem(ADS_VIEW_SETTINGS, rawViewingSettings);
}
