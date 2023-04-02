import React from "react";
import { Ad, RequestStatusEnum } from "../type";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { loadCurrentAdAction } from "../actions";

export function useCurrentAd() {
  const dispatch = useAppDispatch();

  const currentAd = useAppSelector(
    state => state.ads.all.find(ad => ad.id === state.ads.currentAdId) ?? null,
  );

  const isLoading = useAppSelector(
    state => state.ads.status === RequestStatusEnum.PENDING,
  );

  const isError = useAppSelector(
    state => state.ads.status === RequestStatusEnum.REJECTED,
  );

  const setCurrentAd = React.useCallback(
    (id: Ad["id"]) => {
      dispatch(loadCurrentAdAction({ id }));
    },
    [dispatch],
  );

  return {
    currentAd,
    isLoading,
    isError,
    setCurrentAd,
  };
}
