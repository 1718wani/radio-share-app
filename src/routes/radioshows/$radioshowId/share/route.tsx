import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/radioshows/$radioshowId/share')({
  component: () => <div>Hello /radioshows/$radioshowId/share!</div>
})