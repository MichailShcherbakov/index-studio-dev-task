import { styled, Box, BoxProps } from "@mui/material";

export interface AdViewerLayoutProps extends BoxProps {}

export const AdViewerLayout = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));
