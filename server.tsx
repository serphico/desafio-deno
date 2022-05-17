// @deno-types="https://deno.land/x/servest/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://deno.land/x/servest/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";

import { createApp } from "./deps.ts";


const app = createApp();

const colores:any[]=[]

app.get("/",  async (req) => {
    
    console.log(colores)
    await req.respond({
      status: 200,
      headers: new Headers({
        "content-type": "text/html; charset=UTF-8",
      }),
      body: ReactDOMServer.renderToString(
        
        <html>
          <head>
            <meta charSet="utf-8" />
            <title>servest</title>
          </head>
          <body>
            <form action="/post" method="post">
              <div>
                <label htmlFor="color">Pon un color</label>
                <input type="text" name="color" id="color" />
                
              </div>
              <div>
                <input type="submit" value="enviar" />
              </div>
            </form>

            <div style={{backgroundColor: "black"}}>
              {colores.map(color =>
                <ul style={{color: color}}>{color}</ul>
                )}
            </div>
          </body>
        </html>,
      ),
    });
  });

  app.post("/post", async (req) => {
    const bodyForm = await req.formData();
    const color = bodyForm.value("color");
    colores.push(color)
    req.redirect('/')
  });


console.log("server ok escuchando en puerto 8080");

app.listen({port:8080}) 