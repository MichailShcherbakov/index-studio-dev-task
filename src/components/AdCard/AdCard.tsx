import React from "react";
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
import { UiStack, UiTypography } from "~/ui-kit";

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
        <UiStack direction="row" justifyContent="space-between">
          <UiTypography
            component="p"
            variant="h4"
            noWrap
            sx={theme => ({
              ...(props.orientation === "horizontal" && {
                [theme.breakpoints.down("sm")]: {
                  fontSize: theme.spacing(2),
                },
              }),
            })}
          >
            {makePrettyPriceNumber(price, "₽")}
          </UiTypography>
          <AdCardLikeButton adId={adId} />
        </UiStack>
        <UiTypography
          component="p"
          variant="h6"
          noWrap
          sx={theme => ({
            height: "100%",

            ...(props.orientation === "horizontal" && {
              [theme.breakpoints.down("sm")]: {
                fontSize: theme.spacing(1.5),
              },
            }),
          })}
        >
          {title}
        </UiTypography>
        <UiStack
          direction="row"
          justifyContent="space-between"
          gap={2}
          sx={theme => ({
            ...(props.orientation === "horizontal" && {
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
                fontSize: theme.spacing(1.5),
              },
            }),
          })}
        >
          <UiTypography component="span" variant="body2" noWrap>
            {address}
          </UiTypography>
          <UiTypography
            component="span"
            variant="body2"
            sx={{
              flexShrink: 0,
            }}
          >
            {makePrettyDateTime(createdAt)}
          </UiTypography>
        </UiStack>
      </AdCardContentLayout>
    </AdCardLayout>
  );
}

export const AdCard = React.memo(_AdCard);
