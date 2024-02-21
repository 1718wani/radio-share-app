import { createLazyFileRoute } from "@tanstack/react-router";
import { RadioShowsPageComponent } from "./-components/RadioShowsPageComponent";

export const Route = createLazyFileRoute("/radioshows/list")({
  component: RadioShowsPageComponent
});
