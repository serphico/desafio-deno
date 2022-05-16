import {Application} from "./deps.ts"

const app = new Application();

app.use(ctx =>{
    ctx.response.body = "Hola lo pibe!";
})

console.log("server ok escuchando en puerto 8080");

await app.listen({port:8080}) 