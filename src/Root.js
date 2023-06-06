import React from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";

const Root = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Navbar />

      <Outlet />
      {location.pathname !== "/page404" && <Footer />}
    </>
  );
};

export default Root;
