import { ReactComponent as GridIcon } from "~/assets/icons/grid.svg";
import { ReactComponent as ListIcon } from "~/assets/icons/list.svg";
import { AdsViewEnum } from "~/store/ads/type";
import {
  UiToggleButtonGroup,
  UiToggleButton,
  UiToggleButtonGroupProps,
  UiTooltip,
} from "~/ui-kit";

const GRID_VIEW_TOOLTIP = "Галереля";
const LIST_VIEW_TOOLTIP = "Список";

export interface AdsViewerToggleButtonProps extends UiToggleButtonGroupProps {}

export function AdsViewerToggleButton(props: AdsViewerToggleButtonProps) {
  return (
    <UiToggleButtonGroup {...props} exclusive>
      <UiTooltip title={GRID_VIEW_TOOLTIP}>
        <UiToggleButton
          disableRipple
          value={AdsViewEnum.GRID}
          selected={props.value === AdsViewEnum.GRID}
        >
          <GridIcon />
        </UiToggleButton>
      </UiTooltip>
      <UiTooltip title={LIST_VIEW_TOOLTIP}>
        <UiToggleButton
          disableRipple
          value={AdsViewEnum.LIST}
          selected={props.value === AdsViewEnum.LIST}
        >
          <ListIcon />
        </UiToggleButton>
      </UiTooltip>
    </UiToggleButtonGroup>
  );
}
