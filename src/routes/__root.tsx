import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { HeaderComponent } from "../-components/HeaderComponent";

export const Route = createRootRoute({
  component: () => (
    <>
      <HeaderComponent />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
