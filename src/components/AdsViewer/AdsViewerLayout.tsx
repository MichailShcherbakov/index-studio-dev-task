import { Box, BoxProps, styled } from "@mui/material";

export interface AdsViewerLayoutProps extends BoxProps {}

export const AdsViewerLayout = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  padding: theme.spacing(4.375),

  gap: theme.spacing(3.25),

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
  },
}));
