import { Stack, Typography } from "@mui/material";
import { UiChip, UiIconButton, grey, white } from "~/ui-kit";
import { makePrettyPriceNumber } from "./helpers/makePrettyPriceNumber";
import { makePrettyDateTime } from "./helpers/makePrettyDateTime";
import { AdCardLayout, AddCardLayoutProps } from "./AdCardLayout";
import { AdCardImageLayout } from "./AdCardImageLayout";

import { ReactComponent as LikeIcon } from "~/assets/icons/like.svg";
import { useAdLike } from "~/store/ads/hooks/useAdLike";
import { Ad } from "~/store/ads/type";

export interface AdCardProps extends AddCardLayoutProps {
  adId: Ad["id"];
  title: Ad["title"];
  price: Ad["price"];
  address: Ad["address"];
  createdAt: Ad["createdAt"];
  /**
   * @default false
   */
  isSeen?: boolean;
}

export function AdCard({
  adId,
  title,
  price,
  address,
  createdAt,
  isSeen = false,
  ...props
}: AdCardProps) {
  const { isLiked, likeAd, unlikeAd } = useAdLike(adId);

  function likeChangeHandler() {
    if (isLiked) {
      unlikeAd();
    } else {
      likeAd();
    }
  }

  return (
    <AdCardLayout {...props}>
      <AdCardImageLayout {...props}>
        {isSeen && (
          <UiChip
            sx={theme => ({
              position: "absolute",
              top: theme.spacing(1.5),
              left: "50%",

              transform: "translate(-50%, 0)",
            })}
          >
            Просмотрено
          </UiChip>
        )}
      </AdCardImageLayout>
      <Stack
        direction="column"
        sx={theme => ({
          width: "100%",
          height: "100%",
          background: white,
          padding: theme.spacing(1.25, 1.5, 2.5),
        })}
        gap={1.25}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography component="p" variant="h4" noWrap>
            {makePrettyPriceNumber(price, "₽")}
          </Typography>
          <UiIconButton
            size="small"
            isActive={isLiked}
            onClick={likeChangeHandler}
          >
            <LikeIcon />
          </UiIconButton>
        </Stack>
        <Typography
          component="p"
          variant="h6"
          noWrap
          sx={{
            height: "100%",
          }}
        >
          {title}
        </Typography>
        <Stack direction="row" justifyContent="space-between" gap={2}>
          <Typography component="span" variant="body2" noWrap>
            {address}
          </Typography>
          <Typography
            component="span"
            variant="body2"
            sx={{
              flexShrink: 0,
            }}
          >
            {makePrettyDateTime(createdAt)}
          </Typography>
        </Stack>
      </Stack>
    </AdCardLayout>
  );
}
