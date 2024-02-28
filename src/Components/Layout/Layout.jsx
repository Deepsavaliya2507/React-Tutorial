import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
