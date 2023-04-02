import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { RequestStatusEnum } from "../type";
import React from "react";
import { requestAdsAction } from "../actions";

export function useAds() {
  const dispatch = useAppDispatch();
  const ads = useAppSelector(state => state.ads.all);
  const currentPage = useAppSelector(state => state.ads.page);

  const isEmpty = useAppSelector(
    state =>
      state.ads.status !== RequestStatusEnum.IDLE && state.ads.page === 0,
  );

  const isLoading = useAppSelector(
    state =>
      (state.ads.status === RequestStatusEnum.IDLE ||
        state.ads.status === RequestStatusEnum.PENDING) &&
      state.ads.page === 0,
  );

  const isError = useAppSelector(
    state =>
      state.ads.status === RequestStatusEnum.REJECTED && state.ads.page === 0,
  );

  const refetchAds = React.useCallback(() => {
    dispatch(
      requestAdsAction({
        // the first page index in the api starts with 1
        page: currentPage === 0 ? 1 : currentPage,
      }),
    );
  }, [dispatch, currentPage]);

  const requestAds = React.useCallback(
    (page: number) => {
      dispatch(
        requestAdsAction({
          page,
        }),
      );
    },
    [dispatch],
  );

  return { ads, isLoading, isError, isEmpty, refetchAds, requestAds };
}
