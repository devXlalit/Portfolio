import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  // createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      // /work now lives in-page as an anchor section; keep the path as an
      // alias so existing links don't 404.
      {
        path: "work",
        element: <Home />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <p className="text-center py-2 text-xs font-[gilroy-medium] opacity-50">
      Last Updated - April 2026
    </p>
  </React.StrictMode>
);
