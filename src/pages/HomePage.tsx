import React from "react";
import { AdsViewer } from "~/components/AdsViewer";
import { useAdsAction } from "~/store/ads/hooks/useAdsAction";

export function HomePage() {
  const { loadInitialAds, loadAdsViewingSettings, loadAdsMetadata } =
    useAdsAction();

  React.useEffect(() => {
    loadInitialAds();
    loadAdsViewingSettings();
    loadAdsMetadata();
  }, [loadInitialAds, loadAdsViewingSettings, loadAdsMetadata]);

  return <AdsViewer />;
}
