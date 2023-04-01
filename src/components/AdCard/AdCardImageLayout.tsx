import { Box, BoxProps, styled } from "@mui/material";
import { grey } from "~/ui-kit";

export interface AdCardImageLayoutProps extends BoxProps {
  /**
   * @default "vertical"
   */
  orientation?: "vertical" | "horizontal";
}

export const AdCardImageLayout = styled(Box, {
  shouldForwardProp: propName => propName !== "orientation",
})<AdCardImageLayoutProps>(({ theme, orientation = "vertical" }) => ({
  position: "relative",

  display: "flex",

  flexShrink: 0,

  background: grey[300],

  ...(orientation === "vertical" && {
    width: "100%",
    height: theme.spacing(32.5), // 260px
  }),

  ...(orientation === "horizontal" && {
    width: theme.spacing(19.5), // 156px
    height: "100%", // 260px
  }),
}));
