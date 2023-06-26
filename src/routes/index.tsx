import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "../components/layout";
import { Main } from "../main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Main />,
      },
    ],
  },
]);

export const Routers = () => {
  return <RouterProvider router={router} />;
};
