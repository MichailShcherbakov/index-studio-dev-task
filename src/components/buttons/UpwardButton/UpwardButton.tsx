import {
  UiButton,
  UiButtonProps,
  UiTypography,
  grey,
  UiTooltip,
} from "~/ui-kit";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const UPWARD_TOOLTIP = "К началу страницы";

export interface UpwardButtonProps extends UiButtonProps {}

export function UpwardButton(props: UpwardButtonProps) {
  return (
    <UiTooltip title={UPWARD_TOOLTIP}>
      <UiButton
        {...props}
        sx={theme => ({
          position: "absolute",

          right: theme.spacing(4.375),
          bottom: theme.spacing(4.375),

          height: theme.spacing(6.25),

          padding: theme.spacing(1.5),
          margin: theme.spacing(4.375),

          color: grey[600],

          boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.08)",

          zIndex: theme.zIndex.tooltip,

          [theme.breakpoints.down("lg")]: {
            margin: theme.spacing(0),
          },

          [theme.breakpoints.down("sm")]: {
            right: theme.spacing(3),
          },
        })}
      >
        <KeyboardArrowUpIcon />
        <UiTypography
          sx={theme => ({
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          })}
        >
          Вверх
        </UiTypography>
      </UiButton>
    </UiTooltip>
  );
}
