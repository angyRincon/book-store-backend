import Author from "../../../models/Author.js";

export const authorResolvers = {
    Query: {
        authors: async () => await Author.find({}).populate("books")
    },

    Mutation: {
        createAuthor: async (_, { author }) => {
            const { firstname, lastname, books } = author;
            const newAuthor = new Author({ firstname, lastname, books });
            await newAuthor.save();
            return newAuthor.populate("books");
        }
    }
}
