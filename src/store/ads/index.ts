import { createSlice } from "@reduxjs/toolkit";
import { AdsState, AdsViewEnum, RequestStatusEnum } from "./type";
import {
  appendAdsAction,
  requestAdsAction,
  setCurrentAdAction,
  setAdMetadataAction,
  setAdsAction,
  setAdsMetadataAction,
  setAdsViewingSettingsAction,
  setRequestStatusAction,
  loadCurrentAdAction,
} from "./actions";

const initialState: AdsState = {
  all: [],
  page: 0,
  pages: 0,
  status: RequestStatusEnum.IDLE,
  currentAdId: null,
  metadata: {},
  viewingSettings: {
    view: AdsViewEnum.GRID,
  },
};

const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setCurrentAdAction, (state, action) => {
        const adIndex = state.all.findIndex(
          ad => ad.id === action.payload.ad.id,
        );

        if (adIndex === -1) {
          state.all.push(action.payload.ad);
        } else {
          state.all[adIndex] = action.payload.ad;
        }

        state.currentAdId = action.payload.ad.id;
      })
      .addCase(setAdsAction, (state, action) => {
        state.all = action.payload.ads;
        state.page = action.payload.page;
        state.pages = action.payload.pages;
      })
      .addCase(appendAdsAction, (state, action) => {
        state.all.push(...action.payload.ads);
        state.page = action.payload.page;
        state.pages = action.payload.pages;
      })
      .addCase(requestAdsAction, state => {
        state.status = RequestStatusEnum.PENDING;
      })
      .addCase(loadCurrentAdAction, state => {
        state.status = RequestStatusEnum.PENDING;
      })
      .addCase(setRequestStatusAction, (state, action) => {
        state.status = action.payload.status;
      })
      .addCase(setAdsViewingSettingsAction, (state, action) => {
        state.viewingSettings = {
          ...state.viewingSettings,
          ...action.payload.settings,
        };
      })
      .addCase(setAdsMetadataAction, (state, action) => {
        state.metadata = action.payload.metadata;
      })
      .addCase(setAdMetadataAction, (state, action) => {
        state.metadata[action.payload.adId] = {
          ...state.metadata[action.payload.adId],
          ...action.payload.metadata,
        };
      });
  },
});

export const adsReducer = adsSlice.reducer;
