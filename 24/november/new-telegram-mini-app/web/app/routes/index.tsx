import { createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    // TODO: get it properly
    const inTelegramMiniApp = true
    if (inTelegramMiniApp)
      throw redirect({
        to: "/app/airdrops",
      })
    else throw redirect({ to: "/admin" })
  },
})
