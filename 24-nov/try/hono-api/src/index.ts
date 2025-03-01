import { Hono } from "hono"
import api from "./api"
import { prettyJSON } from "hono/pretty-json"

const app = new Hono()
app.route("/", api)
app.notFound((c) => c.json({ message: "Not Found", ok: false }, 404))
app.use("*", prettyJSON())

export default app
