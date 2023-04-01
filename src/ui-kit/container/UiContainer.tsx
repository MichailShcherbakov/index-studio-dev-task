import { Box, styled } from "@mui/material";

export const UiContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  gap: theme.spacing(3.75),

  margin: "auto",

  [theme.breakpoints.up("lg")]: {
    maxWidth: "968px",
  },
}));
