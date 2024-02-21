import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/radioshows/$radioshowId/list")({
  component: () => <div>Hello /radioshows/$radioshowId/list!</div>,
});
