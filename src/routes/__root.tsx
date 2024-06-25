import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { SideBar } from "../components/nav-wrapper";
import "../index.css";
export const Route = createRootRoute({
  component: () => (
    <>
      {/* <div className=" flex gap-2 p-10">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:text-gray-950">
          About
        </Link>
      </div>
      <hr /> */}
      <SideBar navCollapsedSize={4}>
        <Outlet />
      </SideBar>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});
