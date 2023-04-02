import { createAction } from "@reduxjs/toolkit";
import {
  Ad,
  AdMetadata,
  AdMetadataCollection,
  AdsViewingSettings,
  RequestStatusEnum,
} from "./type";

export type RequestAdsOptions = {
  page: number;
  loadMore?: boolean;
};

// Ads

export const requestAdsAction = createAction<RequestAdsOptions | undefined>(
  "requestAdsAction",
);

export const loadInitialAdsAction = createAction("loadInitialAdsAction");

export const setAdsAction = createAction<{
  ads: Ad[];
  page: number;
  pages: number;
}>("setAdsAction");

export const appendAdsAction = createAction<{
  ads: Ad[];
  page: number;
  pages: number;
}>("appendAdsAction");

// Current Ad

export const loadCurrentAdAction = createAction<{
  id: Ad["id"];
}>("loadCurrentAdAction");

export const setCurrentAdAction = createAction<{
  ad: Ad;
}>("setCurrentAdAction");

// Ads Viewing Settings

export const setAdsViewingSettingsAction = createAction<{
  settings: Partial<AdsViewingSettings>;
}>("setAdsViewingSettingsAction");

// Ad Metadata

export const setAdMetadataAction = createAction<{
  adId: Ad["id"];
  metadata: Partial<AdMetadata>;
}>("setAdMetadataAction");

// Private

/** @private */
export const setRequestStatusAction = createAction<{
  status: RequestStatusEnum;
}>("setRequestStatusAction");

/** @private */
export const setAdsMetadataAction = createAction<{
  metadata: AdMetadataCollection;
}>("setAdsMetadataAction");
