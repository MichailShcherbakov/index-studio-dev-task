import { Box, BoxProps, styled } from "@mui/material";

export interface HomePageLayout extends BoxProps {}

export const HomePageLayout = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  minHeight: "100vh",

  padding: theme.spacing(4.375),
}));
