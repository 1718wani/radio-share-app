import { createFileRoute } from "@tanstack/react-router";
import { RadioShowsPageComponent } from "./-components/RadioShowsPageComponent";

export const Route = createFileRoute("/radioshows")({
  component: RadioShowsPageComponent,
});
