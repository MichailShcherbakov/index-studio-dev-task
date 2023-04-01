import { ButtonBase, ButtonBaseProps, styled } from "@mui/material";

export interface UiButtonProps extends ButtonBaseProps {}

export const UiButton = styled(ButtonBase)(({ theme }) => ({
  width: "min-content",
  height: theme.spacing(4),

  borderRadius: theme.spacing(6),

  backgroundColor: theme.palette.background.default,

  fontFamily: "inherit",
  fontWeight: 500,
  lintHeight: theme.spacing(2),

  whiteSpace: "nowrap",

  padding: theme.spacing(1, 1.875),

  color: theme.palette.primary.main,

  gap: theme.spacing(1),

  "&:hover": {
    backgroundColor: "#F8F8F8",
  },
}));
