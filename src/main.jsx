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
import About from "./components/About/About.jsx";

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
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
