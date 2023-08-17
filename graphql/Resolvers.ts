import { Auth_Mutations } from "./auth/Auth.Mutation.js"
import { Auth_Querys } from './auth/Auth.Query.js'
import { ExperienceMutations } from './experience/Experience.Mutation.js'


const All_Querys: Object = {
    ...Auth_Querys
}
const All_Mutations: Object = {
    ...Auth_Mutations,
    ...ExperienceMutations
}

let resolvers: Object;
export default resolvers = {
    Query:All_Querys,
    Mutation:All_Mutations
}