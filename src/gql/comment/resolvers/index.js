//@models
import Comment from "../../../models/Comment.js";

export const commentResolvers = {
    Query: {
        comments: async () => await Comment.find().populate('book')
    },

    Mutation: {
        createComment: async (_, { comment }) => {
            const newComment = new Comment(comment);
            await newComment.save();
            return newComment.populate('book');
        }
    }
}
