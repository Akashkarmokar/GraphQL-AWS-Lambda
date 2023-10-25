import { makeExecutableSchema } from '@graphql-tools/schema'
import { AuthSchema } from './auth/Auth.schema.js'
import { UserSchema } from './users/User.schema.js'
import { ExperienceGraphqlSchema } from './experience/Experience.schema.js'
import { ProfileSchema } from './profile/Profile.Schema.js'
import resolver from './Resolvers.js'

export const schema = makeExecutableSchema({
    typeDefs:[ AuthSchema,ExperienceGraphqlSchema, UserSchema,ProfileSchema ],
    resolvers: resolver
})