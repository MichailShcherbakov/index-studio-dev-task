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

export const requestAdsAction = createAction<RequestAdsOptions | undefined>(
  "requestAdsAction",
);

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

export const setAdsViewingSettingsAction = createAction<{
  settings: Partial<AdsViewingSettings>;
}>("setAdsViewingSettingsAction");

export const setAdMetadataAction = createAction<{
  adId: Ad["id"];
  metadata: Partial<AdMetadata>;
}>("setAdMetadataAction");

/** @private */
export const setRequestStatusAction = createAction<{
  status: RequestStatusEnum;
}>("setRequestStatusAction");

/** @private */
export const setAdsMetadataAction = createAction<{
  metadata: AdMetadataCollection;
}>("setAdsMetadataAction");
