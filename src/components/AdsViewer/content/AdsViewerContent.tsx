import { Ad } from "~/store/ads/type";
import {
  AdsViewerContentLayout,
  AdsViewerContentLayoutProps,
} from "./AdsViewerContentLayout";
import { AdCard } from "~/components/AdCard";
import { useAdsViewSettings } from "~/store/ads/hooks/useAdsViewSettings";
import { CELLS_SIZE_BY_VIEW, ORIENTATION_BY_VIEW } from "./constants";
import { UiGrid } from "~/ui-kit";

export interface AdsViewerContentProps extends AdsViewerContentLayoutProps {
  ads: Ad[];
}

export function AdsViewerContent({ ads, ...props }: AdsViewerContentProps) {
  const { settings } = useAdsViewSettings();

  const orientation = ORIENTATION_BY_VIEW[settings.view];
  const cellSize = CELLS_SIZE_BY_VIEW[settings.view];

  return (
    <AdsViewerContentLayout {...props}>
      {ads.map(ad => (
        <UiGrid
          item
          key={ad.id}
          xs={cellSize.xs}
          sm={cellSize.sm}
          md={cellSize.md}
          lg={cellSize.lg}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AdCard
            orientation={orientation}
            adId={ad.id}
            title={ad.title}
            price={ad.price}
            address={ad.address}
            createdAt={ad.createdAt}
            images={ad.images}
            isSeen={ad.seen}
          />
        </UiGrid>
      ))}
    </AdsViewerContentLayout>
  );
}
