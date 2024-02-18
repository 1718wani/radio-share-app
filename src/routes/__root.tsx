import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/radioshows" className="[&.active]:font-bold">
          一覧
        </Link>
        <Link
          to="/radioshows/$radioshowId"
          params={{ radioshowId: "1" }}
          className="[&.active]:font-bold"
        >
          詳細
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
