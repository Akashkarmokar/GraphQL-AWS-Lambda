import { Profile } from '../Models.js'


export interface IProfileUpdateData {
    name: String
}
export const ProfileUpdate = async (params: IProfileUpdateData) => {
    const name = params.name
    const UpdatedProfile = await Profile.create({
        name: name
    })
    console.log(`***** ${name} *******`)
    return UpdatedProfile
}