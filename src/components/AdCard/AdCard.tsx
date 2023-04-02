import React from "react";
import { Stack, Typography } from "@mui/material";
import { makePrettyPriceNumber } from "./helpers/makePrettyPriceNumber";
import { makePrettyDateTime } from "./helpers/makePrettyDateTime";
import { AdCardLayout, AddCardLayoutProps } from "./AdCardLayout";
import { AdCardImageLayout } from "./AdCardImageLayout";
import { Ad } from "~/store/ads/type";
import { AdCardLikeButton } from "./AdCardLikeButton";
import { AdCardImageSlider } from "./AdCardImageSlider";
import { Link } from "react-router-dom";
import { AdSeenChip } from "./AdSeenChip";
import { AdCardContentLayout } from "./AdCartContentLayout";

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
      <Link
        to={`/${adId}`}
        title={title}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <AdCardImageLayout {...props}>
        {isSeen && <AdSeenChip />}
        <AdCardImageSlider images={images} />
      </AdCardImageLayout>
      <AdCardContentLayout>
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
      </AdCardContentLayout>
    </AdCardLayout>
  );
}

export const AdCard = React.memo(_AdCard);
