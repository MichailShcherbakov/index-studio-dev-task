import { Box, BoxProps, styled } from "@mui/material";

export interface HomePageLayout extends BoxProps {}

export const HomePageLayout = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  padding: theme.spacing(4.375),
}));
