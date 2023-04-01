import React from "react";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { setAdsViewSettingsAction } from "../actions";
import { AdsViewingSettings } from "../type";

export function useAdsViewSettings() {
  const dispatch = useAppDispatch();
  const settings = useAppSelector(state => state.ads.viewingSettings);

  const setSettings = React.useCallback(
    (settings: Partial<AdsViewingSettings>) => {
      dispatch(setAdsViewSettingsAction({ settings }));
    },
    [dispatch],
  );

  return {
    settings,
    setSettings,
  };
}
