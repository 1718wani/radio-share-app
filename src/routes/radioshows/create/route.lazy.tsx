import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/radioshows/create')({
  component: () => <div>Hello /radioshows/create!</div>
})