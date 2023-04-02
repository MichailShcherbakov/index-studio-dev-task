import { createBrowserRouter } from "react-router-dom";
import { AdPageLayout } from "~/layouts/AdPageLayout";
import { HomePageLayout } from "~/layouts/HomePageLayout";
import { AdPage } from "~/pages/AdPage";
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
  {
    path: "/:adId",
    element: (
      <AdPageLayout>
        <AdPage />
      </AdPageLayout>
    ),
  },
]);
