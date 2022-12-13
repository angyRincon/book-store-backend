//@models
import Book from "../../../models/Book.js";

//@config
import { isAdmin, isLoggedIn } from "../../../config/permissions/index.js";

//@utils
import { combineResolvers } from "graphql-resolvers";

export const bookResolvers = {
    Query: {
        books: async () => {
            try {
                const book = await Book.find({}).populate('categories comments author')
                if (book) return { data: book }
            } catch (e) {
                return { status: 404, message: e.message }
            }
        }

    },

    Mutation: {
        createBook: combineResolvers(isLoggedIn, isAdmin, async (_, { book }, context) => {
            try {
                const newBook = new Book(book);
                await newBook.save();
                const result = newBook.populate('categories comments author');
                return { data: result, status: 200 }
            } catch (error) {
                return {
                    data: null,
                    message: error.message
                }
            }
        })
    }
}
