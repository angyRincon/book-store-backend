import { gql } from "apollo-server";

export const bookTypeDefs = gql`
    type BookType {
        id: ID!
        title: String!
        description: String!
        author: AuthorType!
        comments: [CommentType]
        rating: Float
        categories: [CategoryType!]!
    }
    
    input BookInput {
        title: String!
        description: String!
        rating: Float
        author: ID
        comments: [ID]
        categories: [ID]
    }

    type Query {
        books: [BookType!]!
    }

    type Mutation {
        createBook(book: BookInput): BookType!
    }
`
