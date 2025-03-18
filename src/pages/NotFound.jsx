import React from "react";
import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  return (
    <div>
      <h1>OOPS!</h1>
      <p>an error occured</p>
      <h1>{error.statusText || error.message}</h1>
    </div>
  );
}
