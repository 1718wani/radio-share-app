import { createFileRoute } from "@tanstack/react-router";
import { RadioShowDetailPageComponent } from "./list/-components/RadioShowDetailPageComponent";

export const Route = createFileRoute("/radioshows/$radioshowId")({
  component: RadioShowDetailPageComponent,
});
