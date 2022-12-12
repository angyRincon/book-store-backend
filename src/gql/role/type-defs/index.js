import { gql } from "apollo-server";

export const roleTypeDefs = gql`
    type RoleType {
        id: ID!
        name: String!
    }
    
    type Query {
        roles: [RoleType]!
    }
`
