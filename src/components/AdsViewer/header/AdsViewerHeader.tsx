import { useAdsViewSettings } from "~/store/ads/hooks/useAdsViewSettings";
import {
  AdsViewerHeaderLayout,
  AdsViewerHeaderLayoutProps,
} from "./AdsViewerHeaderLayout";
import { AdsViewerToggleButton } from "./AdsViewerToggleButton";
import { AdsViewEnum } from "~/store/ads/type";

export interface AdsViewerHeaderProps extends AdsViewerHeaderLayoutProps {}

export function AdsViewerHeader(props: AdsViewerHeaderProps) {
  const { settings, setSettings } = useAdsViewSettings();

  function adsViewChangeHandler(
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    view: AdsViewEnum,
  ) {
    setSettings({
      view,
    });
  }

  return (
    <AdsViewerHeaderLayout {...props}>
      <AdsViewerToggleButton
        value={settings.view}
        onChange={adsViewChangeHandler}
      />
    </AdsViewerHeaderLayout>
  );
}
