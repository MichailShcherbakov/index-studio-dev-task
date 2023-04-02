import { put, select } from "redux-saga/effects";
import { setAdsMetadataAction } from "../actions";
import { AdMetadata, AdMetadataCollection } from "../type";
import { RootState } from "~/store";

const ADS_METADATA = "ADS_METADATA";

function getAndParseMetadataFromLocalStorage() {
  const rawAdsMetadata = localStorage.getItem(ADS_METADATA);

  return rawAdsMetadata
    ? (JSON.parse(rawAdsMetadata) as AdMetadataCollection)
    : null;
}

export function* loadAdsMetadata() {
  const metadata = getAndParseMetadataFromLocalStorage();

  yield put({
    type: setAdsMetadataAction.type,
    payload: {
      metadata: metadata ?? {},
    },
  });
}

export function* saveAdsMetadataToLocalStorage() {
  const metadata: AdMetadata = yield select(
    (state: RootState) => state.ads.metadata,
  );

  const existsMetadata = getAndParseMetadataFromLocalStorage();

  const rawMetadata = JSON.stringify({ ...existsMetadata, ...metadata });

  localStorage.setItem(ADS_METADATA, rawMetadata);
}
