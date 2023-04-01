import { UiButton, UiButtonProps, grey } from "~/ui-kit";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export interface UpwardButtonProps extends UiButtonProps {}

export function UpwardButton() {
  return (
    <UiButton
      sx={theme => ({
        height: theme.spacing(6.25),
        padding: theme.spacing(1.5),
        color: grey[600],
      })}
    >
      <KeyboardArrowUpIcon />
      Вверх
    </UiButton>
  );
}
