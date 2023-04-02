import WestIcon from "@mui/icons-material/West";
import { useNavigate } from "react-router-dom";
import { UiIconButton } from "~/ui-kit";

export function BackwardButton() {
  const navigate = useNavigate();

  function clickHandler() {
    navigate(-1);
  }

  return (
    <UiIconButton onClick={clickHandler}>
      <WestIcon />
    </UiIconButton>
  );
}
