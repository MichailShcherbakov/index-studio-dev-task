import { ReturnToAboveProvider } from "~/components/ReturnToAboveProvider";
import { UiBox, UiBoxProps, styled } from "~/ui-kit";

export interface HomePageLayoutBaseProps extends UiBoxProps {}

export const HomePageLayoutBase = styled(UiBox)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "100%",

  minHeight: "100vh",
}));

export interface HomePageLayoutProps extends HomePageLayoutBaseProps {}

export function HomePageLayout(props: HomePageLayoutProps) {
  return (
    <ReturnToAboveProvider component="main">
      <HomePageLayoutBase {...props} />
    </ReturnToAboveProvider>
  );
}
