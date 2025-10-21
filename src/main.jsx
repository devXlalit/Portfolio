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
import Work from "./components/Works/Work.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "work",
        element: <Work />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <p className="text-center py-2 text-xs font-[gilroy-medium] opacity-50">
      Last Updated - Oct 2025
    </p>
  </React.StrictMode>
);
