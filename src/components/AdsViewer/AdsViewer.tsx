import { Grid, Skeleton, Stack } from "@mui/material";
import { AdsViewerToggleButton } from "./header/AdsViewerToggleButton";
import { useAds } from "~/store/ads/hooks";
import { AdCard } from "../AdCard";
import { AdCardSkeleton } from "../AdCardSkeleton";
import { UiContainer } from "~/ui-kit/container";
import { AdsViewerFooter } from "./footer/AdsViewerFooter";
import { AdsViewerFooterSkeleton } from "./footer/AdsViewerFooterSkeleton";
import { AdsViewerHeader } from "./header/AdsViewerHeader";
import { AdsViewerHeaderSkeleton } from "./header/AdsViewerHeaderSkeleton";
import { AdsViewerContent } from "./content/AdsViewerContent";
import { AdsViewerContentSkeleton } from "./content/AdsViewerContentSkeleton";

export function AdsViewer() {
  const { ads, isLoading, isError } = useAds();

  return (
    <Stack direction="column" gap={3.25}>
      {isLoading && <AdsViewerHeaderSkeleton />}
      {!isLoading && <AdsViewerHeader />}
      <UiContainer>
        {isLoading && (
          <>
            <AdsViewerContentSkeleton />
            <AdsViewerFooterSkeleton />
          </>
        )}
        {!isLoading && (
          <>
            <AdsViewerContent ads={ads} />
            <AdsViewerFooter />
          </>
        )}
      </UiContainer>
    </Stack>
  );
}
