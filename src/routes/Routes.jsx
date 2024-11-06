import { createBrowserRouter } from "react-router-dom";
import AllGadgets from "../pages/AllGadgets";
import CategoryGadgets from "../pages/CategoryGadgets";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
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
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/all-products",
            element: <AllGadgets />,
            loader: () => fetch("gadgets.json"),
          },
          {
            path: "/category/:category",
            element: <CategoryGadgets />,
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
    ],
  },
]);
