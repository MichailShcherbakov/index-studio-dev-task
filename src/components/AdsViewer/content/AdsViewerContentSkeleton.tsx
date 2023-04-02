import {
  AdsViewerContentLayout,
  AdsViewerContentLayoutProps,
} from "./AdsViewerContentLayout";
import { AdCardSkeleton } from "~/components/AdCard/AdCardSkeleton";
import { useAdsViewSettings } from "~/store/ads/hooks/useAdsViewSettings";
import { CELLS_SIZE_BY_VIEW, ORIENTATION_BY_VIEW } from "./constants";
import { UiGrid } from "~/ui-kit";

const FIXED_AD_SKELETONS_NUM = 20;

export interface AdsViewerContentSkeletonProps
  extends AdsViewerContentLayoutProps {}

export function AdsViewerContentSkeleton(props: AdsViewerContentSkeletonProps) {
  const { settings } = useAdsViewSettings();

  const orientation = ORIENTATION_BY_VIEW[settings.view];
  const cellSize = CELLS_SIZE_BY_VIEW[settings.view];

  return (
    <AdsViewerContentLayout {...props}>
      {new Array(FIXED_AD_SKELETONS_NUM).fill(0).map((_, idx) => (
        <UiGrid
          item
          key={idx}
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
          <AdCardSkeleton orientation={orientation} />
        </UiGrid>
      ))}
    </AdsViewerContentLayout>
  );
}
