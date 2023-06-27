import { Outlet } from "react-router-dom";

import { Background } from "./background";
import { Header } from "./header";

export const Layout = () => {
  // TODO: add sidebar

  return (
    <>
      <div>
        <Header />
        <main>
          {/* main section */}
          <Outlet />
        </main>
      </div>

      <Background />
    </>
  );
};
