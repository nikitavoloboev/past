import { createFileRoute } from "@tanstack/react-router"

function RouteComponent() {
  return <div>/ route</div>
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
})
