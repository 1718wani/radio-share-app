import { createLazyFileRoute } from '@tanstack/react-router'
import { RadioShowDetailPageComponent } from './-components/RadioShowDetailPageComponent'

export const Route = createLazyFileRoute('/$radioshowId')({
  component: RadioShowDetailPageComponent
})