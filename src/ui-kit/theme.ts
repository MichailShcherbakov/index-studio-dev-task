import { createTheme } from "@mui/material";
import { green, grey } from "~/ui-kit";
import { white } from "./colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: green[400],
      contrastText: white,
    },
  },
  typography: {
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
    h5: {
      fontSize: "22px",
      fontWeight: 700,
      lineHeight: "25px",
      color: grey[700],
    },
    h6: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "16px",
      color: grey[700],
    },
    body2: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "14px",
      color: grey[600],
    },
  },
});
