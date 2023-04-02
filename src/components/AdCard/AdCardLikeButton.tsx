import { useAdLike } from "~/store/ads/hooks/useAdLike";
import { UiIconButton, UiIconButtonProps } from "~/ui-kit";

import { ReactComponent as LikeIcon } from "~/assets/icons/like.svg";
import { Ad } from "~/store/ads/type";

export interface AdCardLikeButtonProps extends UiIconButtonProps {
  adId: Ad["id"];
}

export function AdCardLikeButton({ adId, ...props }: AdCardLikeButtonProps) {
  const { isLiked, likeAd, unlikeAd } = useAdLike(adId);

  function likeChangeHandler() {
    if (isLiked) {
      unlikeAd();
    } else {
      likeAd();
    }
  }

  return (
    <UiIconButton
      {...props}
      size="small"
      isActive={isLiked}
      onClick={likeChangeHandler}
    >
      <LikeIcon />
    </UiIconButton>
  );
}
