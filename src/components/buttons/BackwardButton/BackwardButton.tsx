import WestIcon from "@mui/icons-material/West";
import { useNavigate } from "react-router-dom";
import { UiIconButton, UiTooltip } from "~/ui-kit";

const BACKWARD_TOOLTIP = "Назад";

export function BackwardButton() {
  const navigate = useNavigate();

  function clickHandler() {
    navigate(-1);
  }

  return (
    <UiTooltip title={BACKWARD_TOOLTIP}>
      <UiIconButton onClick={clickHandler}>
        <WestIcon />
      </UiIconButton>
    </UiTooltip>
  );
}
