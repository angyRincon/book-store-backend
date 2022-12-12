//@models
import Category from "../../../models/Category.js";

export const categoryResolvers = {
    Query: {
        categories: async () => await Category.find()
    },

    Mutation: {
        createCategory: async (_, { name }) => {
            const newCategory = new Category({ name });
            await newCategory.save();
            return newCategory;
        }
    }
}
