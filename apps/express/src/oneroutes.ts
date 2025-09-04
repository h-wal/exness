import express, { Router } from "express"
import signUpRouter from "./auth/signup"
// import singInRouter from "./auth/singin"

const v1Router: Router = express.Router()

v1Router.use("/signup", signUpRouter)


export default v1Router