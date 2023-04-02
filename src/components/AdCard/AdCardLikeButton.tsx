import { useAdLike } from "~/store/ads/hooks/useAdLike";
import { UiIconButton, UiIconButtonProps, UiTooltip } from "~/ui-kit";

import { ReactComponent as LikeIcon } from "~/assets/icons/like.svg";
import { Ad } from "~/store/ads/type";

const LIKE_TOOLTIP = "Нравится";
const UNLIKE_TOOLTIP = 'Убрать "Нравится"';

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
    <UiTooltip title={isLiked ? UNLIKE_TOOLTIP : LIKE_TOOLTIP}>
      <UiIconButton
        {...props}
        size="small"
        isActive={isLiked}
        onClick={likeChangeHandler}
      >
        <LikeIcon />
      </UiIconButton>
    </UiTooltip>
  );
}
