import React from "react";
import { useAppDispatch } from "~/store/hooks";
import { loadInitialAdsAction } from "../actions";

export function useAdsAction() {
  const dispatch = useAppDispatch();

  const loadInitialAds = React.useCallback(() => {
    dispatch(loadInitialAdsAction());
  }, [dispatch]);

  return {
    loadInitialAds,
  };
}
