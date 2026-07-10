import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";
import './index.css';
import AppLoader from './components/AppLoader.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <RouterProvider router={router} /> */}
    <AppLoader/>
  </StrictMode>
);
