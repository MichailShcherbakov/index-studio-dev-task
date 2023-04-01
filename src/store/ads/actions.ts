import { createAction } from "@reduxjs/toolkit";
import { Ad, AdsViewingSettings, RequestStatusEnum } from "./type";

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

export const setAdsViewSettingsAction = createAction<{
  settings: Partial<AdsViewingSettings>;
}>("setAdsViewSettingsAction");

/** @private */
export const setRequestStatusAction = createAction<{
  status: RequestStatusEnum;
}>("setRequestStatusAction");
