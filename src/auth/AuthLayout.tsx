import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../layout/components/header";
import imageBackground from "../../public/media/background/background.png";
import NavBar from "../layout/components/Navbar";

export default function AuthLayout() {
  const location = useLocation();
  React.useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.style.height = "100%";
    }
    return () => {
      if (root) {
        root.style.height = "auto";
      }
    };
  }, []);
  console.log(location, "locationlocationlocation");

  return (
    <>
      <div
        className="h-[100vh]"
        style={
          location?.pathname == "/auth/login"
            ? {}
            : {
                backgroundImage: `url(${imageBackground})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }
        }
      >
        <div
          className={`${
            location?.pathname == "/auth/login" ? `hidden` : `block`
          }`}
        >
          <Header />
        </div>
        <div
          className={`${
            location?.pathname == "/auth/login" ? `hidden` : `block pt-4`
          }`}
        >
          <NavBar />
        </div>
        <div
          className={`${
            location?.pathname == "/auth/login" ? `` : `mx-10 mt-10`
          }`}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}
