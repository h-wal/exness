import express from "express"
import type {Request, Response} from "express"
import v1Router from "./v1Router.js"

const app = express()

app.use(express.json())

app.get("/", (req: Request,res: Response)=> {
    res.send("Hello World")
})

app.use("/api/v1/", v1Router)

app.listen(3030)