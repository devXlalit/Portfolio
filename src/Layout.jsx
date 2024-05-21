import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import { Lines } from "react-preloaders";
const Layout = () => {
  return (
    <div className="p-12 font-[Gilroy]">
      <Navbar />
      <Contact />
      <Outlet />
    </div>
  );
};

export default Layout;
