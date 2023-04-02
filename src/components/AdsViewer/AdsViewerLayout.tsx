import { UiBox, UiBoxProps, styled } from "~/ui-kit";

export interface AdsViewerLayoutProps extends UiBoxProps {}

export const AdsViewerLayout = styled(UiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  padding: theme.spacing(4.375),

  gap: theme.spacing(3.25),

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
  },
}));
