import { BackwardButton } from "~/components/buttons/BackwardButton";
import { UiBox, UiBoxProps, styled } from "~/ui-kit";

export interface AdPageLayoutBaseProps extends UiBoxProps {}

export const AdPageLayoutBase = styled(UiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "100%",

  minHeight: "100vh",

  overflow: "auto",

  gap: theme.spacing(3),
}));

export interface AdPageLayoutHeaderProps extends UiBoxProps {}

export const AdPageLayoutHeader = styled(UiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  alignItems: "center",
  justifyContent: "space-between",

  width: "100%",
  height: "100%",

  padding: theme.spacing(1, 3),
}));

export interface AdPageLayoutProps extends AdPageLayoutBaseProps {}

export function AdPageLayout({ children, ...props }: AdPageLayoutProps) {
  return (
    <AdPageLayoutBase {...props} component="main">
      <AdPageLayoutHeader>
        <BackwardButton />
      </AdPageLayoutHeader>
      {children}
    </AdPageLayoutBase>
  );
}
