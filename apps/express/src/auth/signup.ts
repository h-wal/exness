import express from "express"
import type {Router, Request, Response} from "express"
import bcrypt from "bcrypt"

const signUpRouter: Router = express.Router()

async function signUpRouterFunction(req: Request, res: Response){

    const password = req.body.password ;
    const email = req.body.email ;

    const exists = false// check if user already exists PrismaClient 

    if(exists){
        res.send("Email with this username/ email already found !")
    }
    
    // if(!exists){
    //     const createUser = await prismaCleint.create({
    //         where:{
    //             username: username,
    //             password: password
    //         }
    //     })

    //     if(createUser){
    //         res.status(200).send("User Creation Successfull")
    //     }

    //     if(!createUser){
    //         res.status(500).send("Error Creating User")
    //     }
    // }

}

signUpRouter.post("/", signUpRouterFunction)

export default signUpRouter 