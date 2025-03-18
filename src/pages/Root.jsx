import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/login"}>login</NavLink>
      <NavLink to={"/app"}>app</NavLink>
      <div id="details">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
