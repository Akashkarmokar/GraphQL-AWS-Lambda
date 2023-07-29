import { Isign_in_dto} from './Auth.Interface.js'
import { AuthValidator } from './Auth.validators.js'
import { User } from '../Models.js'

export const sign_in = async (parent: void, args: { inputData: Isign_in_dto } , context: Object) => {
    const { email , password } = args.inputData
    const user = new User({
        email,
        password
    })
    await user.save()
    return { status: 'User is signed in' }
}

export const users = async(parent: void, args: void, context: Object) => {
    return "Hello users"
}