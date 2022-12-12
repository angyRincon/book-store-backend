import { gql } from "apollo-server";

export const categoryTypeDefs = gql`

    type CategoryType {
        id: ID!
        name: String!
    }

    type Query {
        categories: [CategoryType!]!
    }

    type Mutation {
        createCategory(name: String!) : CategoryType!
    }

`;
