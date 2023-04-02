import { Box, BoxProps, styled } from "@mui/material";

export type AdCardOrientation = "vertical" | "horizontal";

export interface AddCardLayoutProps extends BoxProps {
  /**
   * @default "vertical"
   */
  orientation?: AdCardOrientation;
}

export const AdCardLayout = styled(Box, {
  shouldForwardProp: propName => propName !== "orientation",
})<AddCardLayoutProps>(({ theme, orientation = "vertical" }) => ({
  position: "relative",

  display: "flex",

  ...(orientation === "vertical" && {
    width: theme.spacing(28),
    height: theme.spacing(45.5),

    flexDirection: "column",
  }),

  ...(orientation === "horizontal" && {
    width: "100%",
    height: theme.spacing(16.75),

    flexDirection: "row",
  }),

  borderRadius: theme.spacing(1.5),

  overflow: "hidden",

  cursor: "pointer",

  filter: "drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.08))",

  "&:hover": {
    filter: "drop-shadow(0px 0px 11px rgba(0, 0, 0, 0.31))",
  },
}));
