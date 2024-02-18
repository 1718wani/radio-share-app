import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/radioshows')({
  component: () => <div>Hello /radioshows!</div>
})