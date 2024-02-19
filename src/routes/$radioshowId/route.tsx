import { createFileRoute } from "@tanstack/react-router";
import { RadioShowDetailPageComponent } from "./-components/RadioShowDetailPageComponent";

export const Route = createFileRoute("/$radioshowId")({
  component: RadioShowDetailPageComponent,
});
