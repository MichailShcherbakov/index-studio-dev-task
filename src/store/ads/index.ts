import { createSlice } from "@reduxjs/toolkit";
import { AdsState, AdsViewEnum, RequestStatusEnum } from "./type";
import {
  appendAdsAction,
  requestAdsAction,
  setAdsAction,
  setAdsViewingSettingsAction,
  setRequestStatusAction,
} from "./actions";

const initialState: AdsState = {
  all: [],
  page: 0,
  pages: 0,
  status: RequestStatusEnum.IDLE,
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
      .addCase(setRequestStatusAction, (state, action) => {
        state.status = action.payload.status;
      })
      .addCase(setAdsViewingSettingsAction, (state, action) => {
        state.viewingSettings = {
          ...state.viewingSettings,
          ...action.payload.settings,
        };
      });
  },
});

export const adsReducer = adsSlice.reducer;
