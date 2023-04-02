import React from "react";
import { useParams } from "react-router-dom";
import { AdViewer } from "~/components/AdViewer";
import { useCurrentAd } from "~/store/ads/hooks/useCurrentAd";

export function AdPage() {
  const { adId } = useParams();

  const { setCurrentAd } = useCurrentAd();

  React.useEffect(() => {
    if (!adId) return;

    setCurrentAd(adId);
  }, [setCurrentAd]);

  return <AdViewer />;
}
