//@models
import Book from "../../../models/Book.js";

export const bookResolvers = {
    Query: {
        books: async () => await Book.find({}).populate('categories comments author')
    },

    Mutation: {
        createBook: async (_, { book }) => {
            const newBook = new Book(book);
            await newBook.save();
            return newBook.populate('categories comments author');
        }
    }
}
