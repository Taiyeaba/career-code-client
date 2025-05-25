import { createBrowserRouter } from "react-router";
import RootLayOut from "../Layout/RootLayOut";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut />,
    children: [
      {
        path: '/',
        Component: Home,
      },
       {
        path: '/register',
        Component: Register,
      },
      {
        path: '/signin',
        Component: SignIn,
      },
    ]
  },
]);

export default router;