import { $ } from "bun"

async function main() {
  const args = Bun.argv
  const command = args[2]

  switch (command) {
    case "tunnel":
      console.log(process.env.CLOUDFLARE_TUNNEL_ID, "id")
      await $`cloudflared tunnel ${process.env.CLOUDFLARE_TUNNEL_ID}`
      break
    case undefined:
      console.log("No command provided")
      break
    default:
      console.log("Unknown command")
      break
  }
}

main()
