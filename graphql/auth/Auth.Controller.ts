import { Isign_in_dto} from './Auth.Interface'
import { AuthValidator } from './Auth.validators'

export const sign_in = async (parent: void, args: Isign_in_dto, context: Object) => {
    console.log(AuthValidator.isEmailValid(args.email));
    return { status: 'User is signed in'}
}

export const users = async(parent: void, args: void, context: Object) => {
    return "Hello users"
}