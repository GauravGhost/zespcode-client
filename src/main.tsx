import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import routers from './lib/router/index.tsx';

const router = createBrowserRouter(routers);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
