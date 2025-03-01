import { createFileRoute } from "@tanstack/react-router"

// TODO: make this .mdx
function RouteComponent() {
  return (
    <>
      <div className="h-screen flex items-center justify-center text-2xl md:text-4xl flex-col gap-4 w-[70%] m-auto min-h-screen">
        <p>
          I work on <a href="https://learn-anything.xyz">learn-anything.xyz</a>,{" "}
          <a href="https://github.com/solbond/solbond">solbond.co</a> and{" "}
          <a href="https://github.com/nikitavoloboev">things</a>.
        </p>
        <p>
          I share thoughts on <a href="https://x.com/nikitavoloboev">X</a>,
          photos on <a href="https://instagram.com/nikitavoloboev">IG</a>, songs
          on <a href="https://open.spotify.com/user/nikitavoloboev">Spotify</a>.
        </p>
        <p className="mt-3">
          I <a href="https://docs.nikiv.dev">share things</a> I{" "}
          <a href="https://docs.nikiv.dev/learn">know</a> or{" "}
          <a href="https://docs.nikiv.dev/likes">liked</a> alongside my{" "}
          <a href="https://docs.nikiv.dev/looking-back">journal</a>.
        </p>
        <p>
          <a href="https://x.com/nikitavoloboev">Reach out</a> if you want to
          talk.
        </p>
      </div>
    </>
  )
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
})
