import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import GadgetDetails from "../pages/GadgetDetails";
import Gadgets from "../pages/Gadgets";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Root from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <Gadgets />,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "/category/:category",
            element: <Gadgets />,
            loader: () => fetch("../gadgets.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/product-details/:product_id",
        element: <GadgetDetails />,
        loader: () => fetch("../gadgets.json"),
      },
    ],
  },
]);
