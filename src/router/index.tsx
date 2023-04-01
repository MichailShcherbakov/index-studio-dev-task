import { createBrowserRouter } from "react-router-dom";
import { HomePageLayout } from "~/layouts/HomePageLayout";
import { HomePage } from "~/pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePageLayout>
        <HomePage />
      </HomePageLayout>
    ),
  },
]);
