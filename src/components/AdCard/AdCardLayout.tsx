import { Box, BoxProps, styled } from "@mui/material";

export interface AddCardLayoutProps extends BoxProps {
  /**
   * @default "vertical"
   */
  orientation?: "vertical" | "horizontal";
}

export const AdCardLayout = styled(Box, {
  shouldForwardProp: propName => propName !== "orientation",
})<AddCardLayoutProps>(({ theme, orientation = "vertical" }) => ({
  display: "flex",

  ...(orientation === "vertical" && {
    width: theme.spacing(28), // 224px
    height: theme.spacing(45.5), // 364px

    flexDirection: "column",
  }),

  ...(orientation === "horizontal" && {
    width: "100%", // 224px
    height: theme.spacing(16.75), // 134px

    flexDirection: "row",
  }),

  borderRadius: theme.spacing(1.5),

  overflow: "hidden",

  filter: "drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.08))",

  cursor: "pointer",

  "&:hover": {
    filter: "drop-shadow(0px 0px 11px rgba(0, 0, 0, 0.31))",
  },
}));
