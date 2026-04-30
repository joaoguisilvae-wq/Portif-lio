import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { TranslationProvider } from "./context/TranslationContext.js";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import Home from "./Routes/Home.js";
import Projects from "./Routes/Projects.js";
import About from "./Routes/About.js";
import Contact from "./Routes/Contact.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TranslationProvider>
      <RouterProvider router={router} />
    </TranslationProvider>
  </StrictMode>,
);
