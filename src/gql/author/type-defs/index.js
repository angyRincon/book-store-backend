//packages
import { gql } from "apollo-server";

export const authorTypeDefs = gql`
    type AuthorType {
        id: ID!
        firstname: String!
        lastname: String!
        books: [BookType]
    }

    input AuthorInput {
        firstname: String!
        lastname: String!
        books: [ID]
    }

    type Query {
        authors: [AuthorType!]!
    }

    type Mutation {
        createAuthor(author: AuthorInput!): AuthorType!
    }
`
