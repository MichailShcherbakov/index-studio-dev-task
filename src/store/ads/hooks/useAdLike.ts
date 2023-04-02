import { useAppSelector } from "~/store/hooks";
import { Ad } from "../type";
import React from "react";
import { useDispatch } from "react-redux";
import { setAdMetadataAction } from "../actions";

export function useAdLike(adId: Ad["id"]) {
  const dispatch = useDispatch();
  const isLiked = useAppSelector(
    state => state.ads.metadata[adId]?.isLiked ?? false,
  );

  const likeAd = React.useCallback(() => {
    dispatch(
      setAdMetadataAction({
        adId,
        metadata: {
          isLiked: true,
        },
      }),
    );
  }, [adId, dispatch]);

  const unlikeAd = React.useCallback(() => {
    dispatch(
      setAdMetadataAction({
        adId,
        metadata: {
          isLiked: false,
        },
      }),
    );
  }, [adId, dispatch]);

  return {
    isLiked,
    likeAd,
    unlikeAd,
  };
}
