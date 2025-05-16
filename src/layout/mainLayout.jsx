import React from "react";
import NavBar from "./navbar";
 
import { Outlet } from "react-router";
import Footer from "./footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
