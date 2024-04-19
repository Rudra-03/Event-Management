import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Landing() {
  
  return (
    <div className="container max-w-full font-sans">
      <Header />
      <Outlet />
    </div>
  );
}

export default Landing;
