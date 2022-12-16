//@models
import Book from "../../../models/Book.js";

//@config
import { isAdmin, isLoggedIn } from "../../../config/permissions/index.js";

//@utils
import { combineResolvers } from "graphql-resolvers";
import { errorMessage } from "../../../utils/errorMessage.js";

export const bookResolvers = {
    Query: {
        book: async (_, { id }) => {
            try {
                const book = await Book.findById(id);
                return { data: book, status: 200 }
            } catch (error) {
                errorMessage(error);
            }
        },

        books: async () => {
            try {
                const books = await Book.find({}).populate('categories comments author');
                return { data: books, status: 200 };
            } catch (error) {
                errorMessage(error);
            }
        }

    },

    Mutation: {
        createBook: combineResolvers(async (_, { book }) => {
            try {
                const newBook = new Book(book);
                await newBook.save();
                const result = newBook.populate('categories comments author');
                return { data: result, status: 200 }
            } catch (error) {
                errorMessage(error);
            }
        }),

        updateBook: combineResolvers(async (_, { id, book }) => {
            try {
                const newBook = await Book.findByIdAndUpdate(id, book, { new: true });
                return { data: newBook, status: 200 }
            } catch (error) {
                errorMessage(error);
            }
        }),

        deleteBook: combineResolvers(async (_, { id }) => {
            try {
                const book = await Book.findByIdAndDelete(id);
                return { data: book, status: 204 }
            } catch (error) {
                errorMessage(error);
            }
        })
    }
}
