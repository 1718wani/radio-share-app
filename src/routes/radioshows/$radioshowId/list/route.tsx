import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/radioshows/$radioshowId/list')({
  component: () => <div>Hello /radioshows/$radioshowId/list!</div>
})