import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/app"}>App</NavLink>
        <NavLink to={"/posts"}>Posts</NavLink>
      </nav>
      <div id="details">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
