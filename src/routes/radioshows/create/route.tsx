import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/radioshows/create')({
  component: () => <div>Hello /radioshows/create!</div>
})