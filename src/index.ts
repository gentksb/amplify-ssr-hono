import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { html } from "hono/html"

const app = new Hono()
const imagePath = "/images/1600x1200.png"

const layout = html`
  <html lang="ja">
    <head>
      <title>Image Rendering Test</title>
    </head>
    <body>
      <h1>Image Compare(1600x1200 origin or 800x600 view)</h1>
      <p>
        ブラウザ開発者ツールからそれぞれの画像サイズを見るとサイズ圧縮されていることが分かります
      </p>
      <h2 className="text-2xl bold">Native HTML image</h3>
      <div className="w-full">
        <img
          src="${imagePath}"
          alt="image-compare-1 native"
          width="{800}"
          height="{600}"
          className="mx-auto"
        />
      </div>
      <h2 className="text-2xl bold">Parameter-based optimized image</h3>
      <div className="w-full">
        <img
          src="${imagePath}?width=400&height=300"
          alt="image-compare-2 optimized"
          className="mx-auto"
        />
      </div>
    </body>
  </html>
`

app.get("/", c => {
  const userAgent = c.req.raw.headers.get("User-Agent")
  return c.html(layout)
})

serve(app)
