import express from "express"
import { Request, Response, Router } from "express"
import { prismaClient } from "@repo/db/client"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

const signInRouter: Router = express.Router()

async function signInRouterFunction(req: Request, res: Response){

    const email = req.body.email;
    const password = req.body.password;

    const foundUser = await prismaClient.user.findFirst({
        where:{
            email
        }
    })

    if(foundUser){
        console.log(password)
        console.log(foundUser.password)
        const checkPassword = await bcrypt.compare(password, foundUser.password)

        if(!process.env.JWT_KEY){
            console.log("prcess.env invalid")
            res.send(
                "server error"
            )
            return
        }
        if(checkPassword){
            
            console.log(foundUser.id) 
            const token = jwt.sign({
                userId: foundUser.id
            } , process.env.JWT_KEY)

            res.cookie("jwt", token, {
                httpOnly: false,
                secure: false,
            }).status(200).json({
                message: token
            })
        }

        else if(!checkPassword){
            console.log(checkPassword)
            res.json({
                message: "Invalid Password"
            })
            return
        }

    } else({
        message: "User Not Fuound ! Kindly Sign In"
    })

}

signInRouter.post("/", signInRouterFunction)

export default signInRouter
