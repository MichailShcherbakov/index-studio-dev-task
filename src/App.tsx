import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./ui-kit/theme";
import { RouterProvider } from "react-router";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store";
import { router } from "./router";

export function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StoreProvider>
  );
}
