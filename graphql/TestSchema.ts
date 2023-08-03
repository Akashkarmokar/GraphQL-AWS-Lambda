import { makeExecutableSchema } from '@graphql-tools/schema'
import { AuthSchema } from './auth/Auth.schema.js'
import { UserSchema } from './users/User.schema.js'
import resolver from './Resolvers.js'

export const schema = makeExecutableSchema({
    typeDefs:[ AuthSchema, UserSchema ],
    resolvers: resolver
})