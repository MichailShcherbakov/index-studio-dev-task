import { UiBox, UiBoxProps, styled } from "~/ui-kit";

export interface AdCardImageSliderLayoutProps extends UiBoxProps {}

export const AdCardImageSliderLayout = styled(UiBox)(({ theme }) => ({
  position: "relative",

  flexShrink: 0,

  width: theme.spacing(32),
  height: theme.spacing(36),

  overflow: "hidden",

  borderRadius: theme.spacing(1.25),
}));
