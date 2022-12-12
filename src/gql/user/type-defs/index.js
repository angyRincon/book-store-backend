//@packages
import { gql } from "apollo-server";

export const userTypeDefs = gql`
    
    type UserType {
        id: ID!
        name: String!
        lastname: String!
        email: String!
        password: String!
        displayName: String!
        roles: [RoleType!]!
    }

    input UserInput {
        name: String!
        lastname: String!
        email: String!
        password: String!
        displayName: String!
        roles: [String]
    }

    type Query {
        users: [UserType!]!
    }

    type Mutation {
        signIn(email: String, password: String): String
        signUp(user: UserInput!): String
    }
`;
