import {Router} from "./deps.ts"

export const router = new Router()
    .get("/api", {saludo:"holis"})