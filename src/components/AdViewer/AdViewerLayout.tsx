import { UiBox, UiBoxProps, styled } from "~/ui-kit";

export interface AdViewerLayoutProps extends UiBoxProps {}

export const AdViewerLayout = styled(UiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));
