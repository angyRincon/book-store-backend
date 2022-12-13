//@packages
import { gql } from "apollo-server";

//@typeDefs
import { authorTypeDefs } from "./author/type-defs/index.js";
import { bookTypeDefs } from "./book/type-defs/index.js";
import { commentTypeDefs } from "./comment/type-defs/index.js";
import { categoryTypeDefs } from "./category/type-defs/index.js";
import { userTypeDefs } from "./user/type-defs/index.js";
import { roleTypeDefs } from "./role/type-defs/index.js";

//@resolvers
import { authorResolvers } from "./author/resolvers/index.js";
import { bookResolvers } from "./book/resolvers/index.js";
import { commentResolvers } from "./comment/resolvers/index.js";
import { categoryResolvers } from "./category/resolvers/index.js";
import { userResolvers } from "./user/resolvers/index.js";

const rootTypeDefs = gql`
    type Query {
        _: String
    }

    type Mutation {
        _: String
    }
`

export const typeDefs = [
    rootTypeDefs,
    userTypeDefs,
    roleTypeDefs,
    authorTypeDefs,
    bookTypeDefs,
    commentTypeDefs,
    categoryTypeDefs,
];


export const resolvers = [
    userResolvers,
    authorResolvers,
    bookResolvers,
    commentResolvers,
    categoryResolvers
];
