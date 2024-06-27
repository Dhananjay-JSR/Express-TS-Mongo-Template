import {getModelForClass, modelOptions, prop} from "@typegoose/typegoose";
import PaginatedModel from "./PaginateMode";
@modelOptions({schemaOptions:{timestamps:true}})
class TestUser extends PaginatedModel{
    @prop({required: true})
    name!: string

    @prop()
    email!: string
}

const UserModel=getModelForClass(TestUser)
export default UserModel