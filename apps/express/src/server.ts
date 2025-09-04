import express from "express"
import type {Request, Response} from "express"
import v1Router from "./oneroutes"

const app = express()

app.get("/", (req: Request,res: Response)=> {
    res.send("Hello World")
})

app.use("/api/v1/", v1Router)

app.listen("3000")