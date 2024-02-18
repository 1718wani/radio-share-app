import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/radioshows/$radioshowId')({
  component: () => <div>Hello /radioshows/$radioshowId!</div>
})