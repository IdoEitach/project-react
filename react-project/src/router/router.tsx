import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/homePage/home";
import UserNamePage from "../pages/signUp/UserNamePage/userNamePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserNamePage />,
  },
  {
    path: "home",
    element: <Home />,
  },
]);

<RouterProvider router={router} />;

export {};
