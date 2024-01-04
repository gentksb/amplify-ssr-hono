import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { logger } from "hono/logger";
import { Hono } from "hono";
import { html } from "hono/html";

const app = new Hono();
const imagePath = "/images/1600x1200.png";

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
      <h2>Native HTML image</h3>
      <div>
        <img
          src="${imagePath}"
          alt="image-compare-1 native"
          width="400"
          height="300"
        />
      </div>
      <h2>Parameter-based optimized image</h3>
      <div>
        <img
          src="${imagePath}?width=400&height=300"
          alt="image-compare-2 optimized"
          width="400"
          height="300"
        />
      </div>
    </body>
  </html>
`;

app.get("/", (c) => {
  return c.html(layout);
});

app.use("*", logger());

app.use(
  "/images/*",
  serveStatic({
    root: "./",
  })
);

serve(app);
