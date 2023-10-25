import gql from "graphql-tag";

export const ProfileSchema = gql`
    type SocialMedia {
        name: String
        profileLink: String
    }

    input ProfileInputData {
        name: String
    }

    type ProfileOverview {
        name: String
        designation: String
        bio: String
        imageLink: String
        socialMedia: [SocialMedia]
    }
    
    type Query {
        ProfileOverview: ProfileOverview
    }

    type Mutation {
        UpdateProfile(inputData: ProfileInputData): ProfileOverview
    }
`