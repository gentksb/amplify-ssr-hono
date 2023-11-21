import { serve } from "@hono/node-server"
import { Hono } from "hono"

const app = new Hono()
app.get("/", c => {
  const userAgent = c.req.raw.headers.get("User-Agent")
  return c.text(`Hello Hono!\nUA: ${userAgent}`)
})

serve(app)
