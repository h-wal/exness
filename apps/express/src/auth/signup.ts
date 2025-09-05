import express from "express"
import type {Router, Request, Response} from "express"
import bcrypt from "bcrypt"
import db from "@repo/db/client";
const {prismaClient} = db

const signUpRouter: Router = express.Router()

async function signUpRouterFunction(req: Request, res: Response){

    const email = req.body.email ;
    const password = req.body.password;

    const exists = await prismaClient.user.findFirst({
        where:{
            email: email
        }
    })

    if(exists){
        res.send("Email with this username/ email already found !")
    }
    
    if(!exists){

        const hashedPassword = await bcrypt.hash(password, 10)
        
        const createUser = await prismaClient.user.create({
            data:{
                email: email,
                password: hashedPassword
            }
        })

        if(createUser){
            res.status(200).send("User Creation Successfull")
        }

        if(!createUser){
            res.status(500).send("Error Creating User")
        }
    }

}

signUpRouter.post("/", signUpRouterFunction)

export default signUpRouter 