import { Hono } from "hono"

const api = new Hono<{}>()

api.get("/image-return", async (c) => {
  return c.json({
    image: "some_image.png",
  })
})

api.get("/hello", async (c) => {
  return c.json({
    message: "Hey there",
  })
})

export default api
