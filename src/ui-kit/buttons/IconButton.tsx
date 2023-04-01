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
  size?: "medium";
}

export const UiIconButton = styled(ButtonBase, {
  shouldForwardProp: propName => propName !== "isActive" && propName !== "size",
})<UiIconButtonProps>(({ theme, isActive = false, size = "medium" }) => ({
  color: grey[400],

  borderRadius: theme.spacing(6),

  ...(size === "medium" && {
    width: theme.spacing(5),
    height: theme.spacing(5),

    padding: theme.spacing(1),
  }),

  "&:hover": {
    color: grey[500],
  },

  ...(isActive && {
    color: green[400],

    "&:hover": {},
  }),
}));
