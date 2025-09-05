import express, { Router } from "express"

import { Response, Request } from "express"
import signUpRouter from "./auth/signup.js"
import signInRouter from "./auth/signin.js";

const v1Router: Router = express.Router();

v1Router.use("/signup", signUpRouter)
v1Router.use("/signin", signInRouter)

v1Router.get("/", (req: Request,res: Response)=> {
    res.send("Hello World")
})

export default v1Router
