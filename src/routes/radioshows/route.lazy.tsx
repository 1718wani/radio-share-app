import { createLazyFileRoute } from "@tanstack/react-router";
import { RadioShowsPageComponent } from "./-components/RadioShowsPageComponent";

export const Route = createLazyFileRoute("/radioshows")({
  component: RadioShowsPageComponent
});
