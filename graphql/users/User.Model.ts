import { Schema, model } from "mongoose";

interface IUserSchema {
    email: string
    password: string
}

const userSchema = new Schema<IUserSchema>({
    email: { type: String, required: true },
    password: { type: String, required: true } 
})

let User;
export default User = model<IUserSchema>('User',userSchema)