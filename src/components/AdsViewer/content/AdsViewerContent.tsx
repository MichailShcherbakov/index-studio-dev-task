import { Ad, AdsViewEnum } from "~/store/ads/type";
import {
  AdsViewerContentLayout,
  AdsViewerContentLayoutProps,
} from "./AdsViewerContentLayout";
import { Grid } from "@mui/material";
import { AdCard } from "~/components/AdCard";
import { useAdsViewSettings } from "~/store/ads/hooks/useAdsViewSettings";
import { AdCardOrientation } from "~/components/AdCard/AdCardLayout";

const ORIENTATION_BY_VIEW: Record<AdsViewEnum, AdCardOrientation> = {
  [AdsViewEnum.GRID]: "vertical",
  [AdsViewEnum.LIST]: "horizontal",
};

const CELLS_SIZE_BY_VIEW: Record<AdsViewEnum, number> = {
  [AdsViewEnum.GRID]: 3,
  [AdsViewEnum.LIST]: 6,
};

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
        <Grid item key={ad.id} xs={cellSize}>
          <AdCard
            orientation={orientation}
            title={ad.title}
            price={ad.price}
            address={ad.address}
            createdAt={ad.createdAt}
            isSeen={ad.seen}
          />
        </Grid>
      ))}
    </AdsViewerContentLayout>
  );
}
