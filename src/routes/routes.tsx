import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PopularTours from "../pages/PopularTours";
import MainLayout from "../layouts/MainLayouts";
import TourDetails from "../pages/TourDetails";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/popular-tours",
        element: <PopularTours />,
      },
      {
        path: "/tour-details/:slug",
        element: <TourDetails />
      }
    ],
  },
]);