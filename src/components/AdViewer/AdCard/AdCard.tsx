import { Ad } from "~/store/ads/type";
import { AdCardImageSliderLayout } from "./AdCardImageSliderLayout";
import { AdCardLayout, AdCardLayoutProps } from "./AdCardLayout";
import { AdCardImageSlider } from "~/components/AdCard/AdCardImageSlider";
import { makePrettyPriceNumber } from "~/components/AdCard/helpers/makePrettyPriceNumber";
import { makePrettyDateTime } from "~/components/AdCard/helpers/makePrettyDateTime";
import { AdSeenChip } from "~/components/AdCard/AdSeenChip";
import { AdCardLikeButton } from "~/components/AdCard/AdCardLikeButton";
import { UiStack, UiTypography } from "~/ui-kit";

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
      <UiStack direction="column" gap={2}>
        <UiStack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <UiTypography component="p" variant="body1">
            {ad!.address}
          </UiTypography>
          <AdCardLikeButton adId={ad.id} />
        </UiStack>
        <UiTypography component="h1" variant="h4">
          {ad!.title}
        </UiTypography>
        <UiTypography component="h2" variant="h5">
          {makePrettyPriceNumber(ad!.price, "₽")}
        </UiTypography>
        <UiTypography component="p" variant="body1">
          {ad!.about}
        </UiTypography>
        <UiTypography component="p" variant="body1">
          {makePrettyDateTime(ad!.createdAt)}
        </UiTypography>
      </UiStack>
    </AdCardLayout>
  );
}
