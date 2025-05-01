import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import routers from './lib/router/index.tsx';
import { ThemeProvider } from './components/provider/theme-provider.tsx';

const router = createBrowserRouter(routers);

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
)
