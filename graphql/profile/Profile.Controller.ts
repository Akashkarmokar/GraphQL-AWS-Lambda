import { IProfileInputData } from "./Profile.Interface.js"
import { ProfileUpdate } from "./Profile.Services.js"

export const ProfileOverview = async (parent: void, args: void, context: void)=>{
    return {
        name: 'Akash'
    }
}

export const UpdateProfile = async (parent:void, args: { inputData: IProfileInputData }, context: void) => {
    const { name } = args.inputData
    return await ProfileUpdate({name})
}