import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { RequestStatusEnum } from "../type";
import React from "react";
import { requestAdsAction } from "../actions";

export function useLoadMoreAds() {
  const dispatch = useAppDispatch();

  const currentPage = useAppSelector(state => state.ads.page);
  const maxPageNum = useAppSelector(state => state.ads.pages);

  const isLoading = useAppSelector(
    state =>
      state.ads.status === RequestStatusEnum.PENDING && !!state.ads.all.length,
  );

  const isError = useAppSelector(
    state =>
      state.ads.status === RequestStatusEnum.REJECTED && !!state.ads.all.length,
  );

  const isLoadableMore = currentPage + 1 < maxPageNum;

  const loadMore = React.useCallback(() => {
    if (!isLoadableMore) return;

    dispatch(
      requestAdsAction({
        page: currentPage + 1,
        loadMore: true,
      }),
    );
  }, [dispatch, currentPage, isLoadableMore]);

  return {
    loadMore,
    isLoading,
    isError,
    isLoadableMore,
  };
}
