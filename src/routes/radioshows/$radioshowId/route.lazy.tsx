import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/radioshows/$radioshowId')({
  component: () => <div>Hello /radioshows/$radioshowId!</div>
})