import { Auth_Mutations } from "./auth/Auth.Mutation"
import { Auth_Querys } from './auth/Auth.Query'


const All_Querys: Object = {
    ...Auth_Querys
}
const All_Mutations: Object = {
    ...Auth_Mutations
}

let resolvers: Object;
export default resolvers = {
    Query:All_Querys,
    Mutation:All_Mutations
}