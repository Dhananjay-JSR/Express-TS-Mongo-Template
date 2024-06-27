import UserModel from "@/model/User";

export class UserService {
    static async getUsers(){
        return await UserModel.paginate()
    }

    static async createUser(name:string,email:string){
        return await UserModel.create({name,email})
    }
}