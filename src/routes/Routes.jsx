import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Gadgets from "../pages/Gadgets";
import Home from "../pages/Home";
import { loader as rootLoader } from "../utilities/loader";
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
        loader: rootLoader,
      },
      {
        path: "/:categoryName",
        element: <Gadgets />,
      },
    ],
  },
]);
