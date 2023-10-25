import { Auth_Mutations } from "./auth/Auth.Mutation.js"
import { Auth_Querys } from './auth/Auth.Query.js'
import { ExperienceMutations } from './experience/Experience.Mutation.js'
import { ProfileQuery } from './profile/Profile.Query.js'
import { ProfileMutation } from "./profile/Profile.Mutation.js"


const All_Querys: Object = {
    ...Auth_Querys,
    ...ProfileQuery
}
const All_Mutations: Object = {
    ...Auth_Mutations,
    ...ExperienceMutations,
    ...ProfileMutation
}

let resolvers: Object;
export default resolvers = {
    Query:All_Querys,
    Mutation:All_Mutations
}