import { Box, BoxProps, styled } from "@mui/material";
import { ReturnToAboveProvider } from "~/components/ReturnToAboveProvider";

export interface HomePageLayoutBaseProps extends BoxProps {}

export const HomePageLayoutBase = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  height: "100%",

  minHeight: "100vh",
}));

export interface HomePageLayoutProps extends HomePageLayoutBaseProps {}

export function HomePageLayout(props: HomePageLayoutProps) {
  return (
    <ReturnToAboveProvider>
      <HomePageLayoutBase {...props} />
    </ReturnToAboveProvider>
  );
}
