//@packages
import { gql } from "apollo-server";

export const commentTypeDefs = gql`
    type CommentType {
        id: ID
        content: String!
        book: BookType!
        positiveVotes: Int
        negativeVotes: Int
        #        user: UserType
    }

    input CommentInput {
        content: String!
        book: ID!
        positiveVotes: Int
        negativeVotes: Int
    }

    type Query {
        comments: [CommentType!]!
    }

    type Mutation {
        createComment(comment: CommentInput!): CommentType!
    }
`
