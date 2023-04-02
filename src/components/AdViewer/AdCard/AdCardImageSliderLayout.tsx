import { Box, BoxProps, styled } from "@mui/material";

export interface AdCardImageSliderLayoutProps extends BoxProps {}

export const AdCardImageSliderLayout = styled(Box)(({ theme }) => ({
  position: "relative",

  flexShrink: 0,

  width: theme.spacing(32),
  height: theme.spacing(36),

  overflow: "hidden",

  borderRadius: theme.spacing(1.25),
}));
