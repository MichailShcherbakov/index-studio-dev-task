import { ButtonBase, ButtonBaseProps, styled } from "@mui/material";
import { green, grey } from "~/ui-kit";

export interface UiIconButtonProps extends ButtonBaseProps {
  /**
   * @default false
   */
  isActive?: boolean;
  /**
   * "medium"
   */
  size?: "small" | "medium";
}

export const UiIconButton = styled(ButtonBase, {
  shouldForwardProp: propName => propName !== "isActive" && propName !== "size",
})<UiIconButtonProps>(({ theme, isActive = false, size = "medium" }) => ({
  color: grey[400],

  borderRadius: theme.spacing(6),

  transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",

  ...(size === "small" && {
    width: theme.spacing(4),
    height: theme.spacing(4),

    padding: theme.spacing(0),
  }),

  ...(size === "medium" && {
    width: theme.spacing(5),
    height: theme.spacing(5),

    padding: theme.spacing(0),
  }),

  "&:hover": {
    color: grey[500],
  },

  "&:active": {
    color: green[400],
  },

  ...(isActive && {
    color: green[400],

    "&:hover": {},
  }),
}));
