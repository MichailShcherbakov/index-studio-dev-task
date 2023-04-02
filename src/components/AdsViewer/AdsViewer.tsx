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
import { AdsViewerLayout, AdsViewerLayoutProps } from "./AdsViewerLayout";

export interface AdsViewerProps extends AdsViewerLayoutProps {}

export function AdsViewer(props: AdsViewerProps) {
  const { ads, refetchAds, isLoading, isError, isEmpty } = useAds();

  if (!isLoading && !isError && isEmpty) return <EmptyRequestStub />;

  return (
    <AdsViewerLayout {...props}>
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
    </AdsViewerLayout>
  );
}
