import { Ad } from "~/store/ads/type";
import { AdCardImageSliderLayout } from "./AdCardImageSliderLayout";
import { AdCardLayout, AdCardLayoutProps } from "./AdCardLayout";
import { AdCardImageSlider } from "~/components/AdCard/AdCardImageSlider";
import { Stack, Typography } from "@mui/material";
import { makePrettyPriceNumber } from "~/components/AdCard/helpers/makePrettyPriceNumber";
import { makePrettyDateTime } from "~/components/AdCard/helpers/makePrettyDateTime";
import { AdSeenChip } from "~/components/AdCard/AdSeenChip";
import { AdCardLikeButton } from "~/components/AdCard/AdCardLikeButton";

export interface AdCardProps extends AdCardLayoutProps {
  ad: Ad;
}

export function AdCard({ ad, ...props }: AdCardProps) {
  return (
    <AdCardLayout {...props}>
      <AdCardImageSliderLayout>
        {ad!.seen && <AdSeenChip />}
        <AdCardImageSlider images={ad!.images} />
      </AdCardImageSliderLayout>
      <Stack direction="column" gap={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <Typography component="p" variant="body1">
            {ad!.address}
          </Typography>
          <AdCardLikeButton adId={ad.id} />
        </Stack>
        <Typography component="h1" variant="h4">
          {ad!.title}
        </Typography>
        <Typography component="h2" variant="h5">
          {makePrettyPriceNumber(ad!.price, "₽")}
        </Typography>
        <Typography component="p" variant="body1">
          {ad!.about}
        </Typography>
        <Typography component="p" variant="body1">
          {makePrettyDateTime(ad!.createdAt)}
        </Typography>
      </Stack>
    </AdCardLayout>
  );
}
