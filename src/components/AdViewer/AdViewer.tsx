import { useCurrentAd } from "~/store/ads/hooks/useCurrentAd";
import { AdViewerLayout, AdViewerLayoutProps } from "./AdViewerLayout";
import { AdCard } from "./AdCard";
import { AdCardSkeleton } from "./AdCard/AdCardSkeleton";
import { AdNotFoundStub } from "../stubs/AdNotFoundStub";

export interface AdViewerProps extends AdViewerLayoutProps {}

export function AdViewer(props: AdViewerProps) {
  const { currentAd, isLoading, isError } = useCurrentAd();

  return (
    <AdViewerLayout {...props}>
      {isError && <AdNotFoundStub />}
      {isLoading && <AdCardSkeleton />}
      {!isLoading && !isError && currentAd && <AdCard ad={currentAd} />}
    </AdViewerLayout>
  );
}
