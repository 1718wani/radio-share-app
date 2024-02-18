import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/radioshows')({
  component: () => <div>Hello /radioshows!</div>
})