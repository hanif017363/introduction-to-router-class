import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import App from "../App";
import NoFound from "../pages/NoFound";
import Root from "../pages/Root";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/app",
        element: <App />,
      },
    ],
  },
  // { path: "*", element: "<NoFound/>" },
]);
