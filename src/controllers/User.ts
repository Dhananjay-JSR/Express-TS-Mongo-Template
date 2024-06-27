import { Request,Response } from "express";

export class UserController {
    static async getUser(req:Request, res:Response){
        res.json({message:"User V1"})
    }
}