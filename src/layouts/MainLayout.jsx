import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import NavBar from "./NavBar";

const MainLayout = () => {
  return (
    <div className="bg-white">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
