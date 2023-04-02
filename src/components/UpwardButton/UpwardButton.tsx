import { UiButton, UiButtonProps, grey } from "~/ui-kit";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Typography } from "@mui/material";

export interface UpwardButtonProps extends UiButtonProps {}

export function UpwardButton(props: UpwardButtonProps) {
  return (
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
      <Typography
        sx={theme => ({
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        })}
      >
        Вверх
      </Typography>
    </UiButton>
  );
}
