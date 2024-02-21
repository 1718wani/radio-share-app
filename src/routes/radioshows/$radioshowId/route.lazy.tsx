import { createLazyFileRoute } from "@tanstack/react-router";
import { RadioShowDetailPageComponent } from "./list/-components/RadioShowDetailPageComponent";

export const Route = createLazyFileRoute("/radioshows/$radioshowId")({
  component: RadioShowDetailPageComponent,
});
