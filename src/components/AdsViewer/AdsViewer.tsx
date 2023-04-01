import { Grid, Skeleton, Stack } from "@mui/material";
import { AdsViewerToggleButton } from "./header/AdsViewerToggleButton";
import { useAds } from "~/store/ads/hooks";
import { UiContainer } from "~/ui-kit/container";
import { AdsViewerFooter } from "./footer/AdsViewerFooter";
import { AdsViewerFooterSkeleton } from "./footer/AdsViewerFooterSkeleton";
import { AdsViewerHeader } from "./header/AdsViewerHeader";
import { AdsViewerHeaderSkeleton } from "./header/AdsViewerHeaderSkeleton";
import { AdsViewerContent } from "./content/AdsViewerContent";
import { AdsViewerContentSkeleton } from "./content/AdsViewerContentSkeleton";
import { RequestErrorStub } from "../stubs/RequestErrorStub";
import { EmptyRequestStub } from "../stubs/EmptyRequestStub";

export function AdsViewer() {
  const { ads, refetchAds, isLoading, isError, isEmpty } = useAds();

  if (!isLoading && !isError && isEmpty) return <EmptyRequestStub />;

  return (
    <Stack direction="column" gap={3.25}>
      {isError && <RequestErrorStub onRequestAgain={refetchAds} />}
      {isLoading && <AdsViewerHeaderSkeleton />}
      {!isLoading && !isError && <AdsViewerHeader />}
      <UiContainer>
        {isLoading && !isError && (
          <>
            <AdsViewerContentSkeleton />
            <AdsViewerFooterSkeleton />
          </>
        )}
        {!isLoading && !isError && (
          <>
            <AdsViewerContent ads={ads} />
            <AdsViewerFooter />
          </>
        )}
      </UiContainer>
    </Stack>
  );
}
