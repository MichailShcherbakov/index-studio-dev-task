import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { RequestStatusEnum } from "../type";
import React from "react";
import { requestAdsAction } from "../actions";

export function useAds() {
  const dispatch = useAppDispatch();
  const ads = useAppSelector(state => state.ads.all);
  const currentPage = useAppSelector(state => state.ads.page);

  const isLoading = useAppSelector(
    state =>
      state.ads.status === RequestStatusEnum.PENDING && !state.ads.all.length,
  );

  const isError = useAppSelector(
    state =>
      state.ads.status === RequestStatusEnum.REJECTED && !state.ads.all.length,
  );

  const refetchAds = React.useCallback(() => {
    dispatch(
      requestAdsAction({
        // the first page index in the api starts with 1
        page: currentPage === 0 ? 1 : currentPage,
      }),
    );
  }, [dispatch, currentPage]);

  return { ads, refetchAds, isLoading, isError };
}
