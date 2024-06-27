import ErrorHandler from "@/provider/Error";
import { UserService } from "@/service/User";
import { Request, Response } from "express";

export class UserController {
  static async getUser(req: Request, res: Response) {
    const users = await UserService.getUsers();
    res.json(users);
  }

  static async createUser(req: Request, res: Response) {
    try {
      const payload = req.body as { name: string; email: string };
      const response = await UserService.createUser(
        payload.name,
        payload.email
      );
      res.json(response);
    } catch (errr) {
        ErrorHandler.APIErrorHandler(errr,res)
    }
  }
}
