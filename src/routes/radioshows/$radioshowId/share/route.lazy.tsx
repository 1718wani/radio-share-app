import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/radioshows/$radioshowId/share')({
  component: () => <div>Hello /radioshows/$radioshowId/share!</div>
})