import React from "react";
import { useAppDispatch } from "~/store/hooks";
import {
  loadAdsMetadataAction,
  loadAdsViewingSettingsAction,
  loadInitialAdsAction,
} from "../actions";

export function useAdsAction() {
  const dispatch = useAppDispatch();

  const loadInitialAds = React.useCallback(() => {
    dispatch(loadInitialAdsAction());
  }, [dispatch]);

  const loadAdsViewingSettings = React.useCallback(() => {
    dispatch(loadAdsViewingSettingsAction());
  }, [dispatch]);

  const loadAdsMetadata = React.useCallback(() => {
    dispatch(loadAdsMetadataAction());
  }, [dispatch]);

  return {
    loadInitialAds,
    loadAdsViewingSettings,
    loadAdsMetadata,
  };
}
