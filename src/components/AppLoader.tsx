import { RouterProvider } from "react-router-dom";
import { router } from "../routes/routes";

export default function AppLoader() {
  return <RouterProvider router={router} />;
}
