import React from "react";
import { AdsViewer } from "~/components/AdsViewer";
import { useAdsAction } from "~/store/ads/hooks/useAdsAction";

export function HomePage() {
  const { loadInitialAds } = useAdsAction();

  React.useEffect(() => {
    loadInitialAds();
  }, [loadInitialAds]);

  return <AdsViewer />;
}
