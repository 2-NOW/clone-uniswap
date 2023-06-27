import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Main } from "@/app/main";
import { Layout } from "@/components/layout";

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
