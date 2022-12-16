import { gql } from "apollo-server";

export const bookTypeDefs = gql`

    type BookType {
        id: ID
        title: String
        description: String
        author: AuthorType
        comments: [CommentType]
        rating: Float
        categories: [CategoryType!]
    }

    input BookInput {
        title: String!
        description: String!
        rating: Float
        author: ID
        comments: [ID]
        categories: [ID]
    }

    type BookArrayResponse {
        data: [BookType]
        status: Int!
        message: String
    }

    type BookObjectResponse {
        data: BookType
        status: Int!
        message: String
    }

    type Query {
        book(id: ID!): BookObjectResponse
        books: BookArrayResponse!
    }

    type Mutation {
        createBook(book: BookInput): BookObjectResponse!
        updateBook(id: ID, book: BookInput): BookObjectResponse!
        deleteBook(id: ID): BookObjectResponse!
    }
`
