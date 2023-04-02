import { Box, BoxProps, alpha, styled } from "@mui/material";
import { grey, white } from "../colors";

export interface UiChipProps extends BoxProps {}

export const UiChip = styled(Box)(({ theme }) => ({
  background: alpha(white, 0.9),

  width: "min-content",

  whiteSpace: "nowrap",

  padding: theme.spacing(0.625, 1),

  userSelect: "none",

  borderRadius: theme.spacing(1),

  fontSize: theme.spacing(1.5),
  fontWeight: 400,
  lineHeight: "13.79px",

  color: grey[700],
}));
