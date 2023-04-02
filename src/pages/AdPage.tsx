import React from "react";
import { useParams } from "react-router-dom";
import { AdViewer } from "~/components/AdViewer";
import { useAdsAction } from "~/store/ads/hooks/useAdsAction";
import { useCurrentAd } from "~/store/ads/hooks/useCurrentAd";

export function AdPage() {
  const { adId } = useParams();

  const { loadAdsMetadata } = useAdsAction();

  const { setCurrentAd } = useCurrentAd();

  React.useEffect(() => {
    if (!adId) return;

    setCurrentAd(adId);

    loadAdsMetadata();
  }, [setCurrentAd]);

  return <AdViewer />;
}
