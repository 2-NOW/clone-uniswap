import { Outlet } from "react-router-dom";

import { Background } from "./background";
import { Header } from "./header";

import { ModalPortal } from "@/components/modal/portal";

export const Layout = () => {
  // TODO: add sidebar

  return (
    <>
      <Header />
      {/* main section */}
      <Outlet />
      {/* background layer */}
      <Background />
      {/* modal */}
      <ModalPortal />
    </>
  );
};
