import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";
import Header from "./components/header";
import imageBackground from "../../public/media/background/background.png";

export default function MasterLayout() {
  return (
    <div
      className="h-[100vh]"
      style={{
        backgroundImage: `url(${imageBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <div className="pt-4">
        <NavBar />
      </div>
      <div className="mx-10 mt-10">
        <Outlet />
      </div>
    </div>
  );
}
