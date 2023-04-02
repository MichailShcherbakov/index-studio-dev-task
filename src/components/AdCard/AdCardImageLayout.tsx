import { UiBox, UiBoxProps, grey, styled } from "~/ui-kit";

export interface AdCardImageLayoutProps extends UiBoxProps {
  /**
   * @default "vertical"
   */
  orientation?: "vertical" | "horizontal";
}

export const AdCardImageLayout = styled(UiBox, {
  shouldForwardProp: propName => propName !== "orientation",
})<AdCardImageLayoutProps>(({ theme, orientation = "vertical" }) => ({
  position: "relative",

  display: "flex",

  flexShrink: 0,

  background: grey[300],

  ...(orientation === "vertical" && {
    width: "100%",
    height: theme.spacing(32.5),
  }),

  ...(orientation === "horizontal" && {
    width: theme.spacing(19.5),
    height: "100%",

    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(14),
    },
  }),
}));
