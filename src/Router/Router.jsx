import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Applications from "../Pages/Applications/Applications";
import Installed from "../Pages/Installed/Installed";
import AppDetails from "../Pages/App-Details/AppDetails";

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
        path: "/all-apps",
        Component: Applications,
      },
      {
        path: "/app-detail/:id",
        Component: AppDetails,
      },
      {
        path: "/installation",
        Component: Installed,
      },
    ],
  },
]);

export default router;
