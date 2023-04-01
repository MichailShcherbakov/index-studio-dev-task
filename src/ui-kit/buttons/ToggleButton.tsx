import {
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
  ToggleButtonProps,
  styled,
} from "@mui/material";
import { green, grey } from "../colors";

export interface UiToggleButtonProps extends ToggleButtonProps {}

export const UiToggleButton = styled(ToggleButton)(({ theme }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),

  padding: theme.spacing(1),

  color: grey[400],

  "&:hover": {
    background: "transparent",
    color: grey[500],
  },

  "&:active": {
    background: "transparent",
    color: green[400],
  },

  "&.Mui-selected": {
    background: "transparent",
    color: green[400],

    "&:hover": {
      background: "transparent",
    },

    "&:active": {
      background: "transparent",
    },
  },
}));

export interface UiToggleButtonGroupProps extends ToggleButtonGroupProps {}

export const UiToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));
