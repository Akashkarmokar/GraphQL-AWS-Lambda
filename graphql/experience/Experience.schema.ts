import gql from 'graphql-tag'

export const ExperienceGraphqlSchema = gql`
    type skillsOfExperience {
        type: String
        name: String
    }

    type Experience{
        company_name: String
        location: String
        designation: String
        skills: [skillsOfExperience]
        isActive: Boolean
    }

    input skillsOfadd_experience_dto {
        type: String
        name: String
    }

    input add_experience_dto {
        company_name: String
        location: String
        designation: String
        skills:[skillsOfadd_experience_dto]
    }
    type Mutation {
        addExperience(inputData: add_experience_dto): Experience
    }

`