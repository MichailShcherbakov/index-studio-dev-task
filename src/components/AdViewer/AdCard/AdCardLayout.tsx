import { Box, styled } from "@mui/material";

export interface AdCardLayoutProps {}

export const AdCardLayout = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  gap: theme.spacing(4),

  filter: "drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.08))",

  background: theme.palette.background.default,
  borderRadius: theme.spacing(1.5),

  padding: theme.spacing(4, 5),

  width: "840px",

  [theme.breakpoints.down("md")]: {
    width: "560px",

    flexDirection: "column",

    alignItems: "center",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",

    filter: "none",

    padding: theme.spacing(0, 3),
  },
}));
