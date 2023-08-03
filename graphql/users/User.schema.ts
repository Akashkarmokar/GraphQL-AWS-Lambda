import gql from "graphql-tag";

export const UserSchema = gql`
    type Query {
        users: String
    }
`