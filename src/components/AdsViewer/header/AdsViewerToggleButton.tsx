import { ReactComponent as GridIcon } from "~/assets/icons/grid.svg";
import { ReactComponent as ListIcon } from "~/assets/icons/list.svg";
import { AdsViewEnum } from "~/store/ads/type";
import {
  UiToggleButtonGroup,
  UiToggleButton,
  UiToggleButtonGroupProps,
} from "~/ui-kit/";

export interface AdsViewerToggleButtonProps extends UiToggleButtonGroupProps {}

export function AdsViewerToggleButton(props: AdsViewerToggleButtonProps) {
  return (
    <UiToggleButtonGroup {...props} exclusive>
      <UiToggleButton value={AdsViewEnum.GRID} disableRipple>
        <GridIcon />
      </UiToggleButton>
      <UiToggleButton value={AdsViewEnum.LIST} disableRipple>
        <ListIcon />
      </UiToggleButton>
    </UiToggleButtonGroup>
  );
}
