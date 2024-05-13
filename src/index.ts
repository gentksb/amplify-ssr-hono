import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();
app.get("/", (c) => {
  // list all headers to display response
  let res = "your headers: \n";
  for (const header of c.req.raw.headers.entries()) {
    res += `${header[0]}: ${header[1]}` + "\n";
  }
  return c.text(res);
});

serve(app);
