import React from "react";
import { Stack, Typography } from "@mui/material";
import { UiChip, white } from "~/ui-kit";
import { makePrettyPriceNumber } from "./helpers/makePrettyPriceNumber";
import { makePrettyDateTime } from "./helpers/makePrettyDateTime";
import { AdCardLayout, AddCardLayoutProps } from "./AdCardLayout";
import { AdCardImageLayout } from "./AdCardImageLayout";
import { Ad } from "~/store/ads/type";
import { AdCardLikeButton } from "./AdCardLikeButton";
import { AdCardImageSlider } from "./AdCardImageSlider";

export interface AdCardProps extends AddCardLayoutProps {
  adId: Ad["id"];
  title: Ad["title"];
  price: Ad["price"];
  address: Ad["address"];
  createdAt: Ad["createdAt"];
  images: Ad["images"];
  /**
   * @default false
   */
  isSeen?: boolean;
}

export function _AdCard({
  adId,
  title,
  price,
  address,
  createdAt,
  images,
  isSeen = false,
  ...props
}: AdCardProps) {
  return (
    <AdCardLayout {...props}>
      <AdCardImageLayout {...props}>
        {isSeen && (
          <UiChip
            sx={theme => ({
              position: "absolute",
              top: theme.spacing(1.5),
              left: "50%",
              zIndex: theme.zIndex.tooltip,
              transform: "translate(-50%, 0)",
            })}
          >
            Просмотрено
          </UiChip>
        )}
        <AdCardImageSlider images={images} />
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
          <AdCardLikeButton adId={adId} />
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

export const AdCard = React.memo(_AdCard);
