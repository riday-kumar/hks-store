import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Applications from "../Pages/Applications/Applications";
import Installed from "../Pages/Installed/Installed";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Applications,
      },
      {
        path: "/installation",
        Component: Installed,
      },
    ],
  },
]);

export default router;
