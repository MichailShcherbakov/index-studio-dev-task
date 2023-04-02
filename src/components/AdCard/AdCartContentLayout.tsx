import { Box, styled } from "@mui/material";
import { white } from "~/ui-kit";

export const AdCardContentLayout = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  background: white,
  padding: theme.spacing(1.25, 1.5, 2.5),
  gap: 1.25,
}));
