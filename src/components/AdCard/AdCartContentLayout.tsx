import { UiBox, UiBoxProps, styled, white } from "~/ui-kit";

export interface AdCardContentLayoutProps extends UiBoxProps {}

export const AdCardContentLayout = styled(UiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  background: white,
  padding: theme.spacing(1.25, 1.5, 2.5),
  gap: 1.25,
}));
