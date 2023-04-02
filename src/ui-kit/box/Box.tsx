import { Box, BoxProps } from "@mui/material";

export type UiBoxProps<TComponent extends React.ElementType<any> = "div"> =
  BoxProps<TComponent>;

export const UiBox = Box;
