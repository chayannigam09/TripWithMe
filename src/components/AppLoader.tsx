import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../routes/routes";
import Loader from "./Loader";

export default function AppLoader() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2500);

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return <Loader />;
//   }

  return <RouterProvider router={router} />;
}