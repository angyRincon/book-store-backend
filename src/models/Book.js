import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: {
        ref: 'Author',
        type: Schema.Types.ObjectId
    },
    comments: [{
        ref: 'Comment',
        type: Schema.Types.ObjectId
    }],
    categories: [{
        ref: 'Category',
        type: Schema.Types.ObjectId
    }],
})

export default model('Book', bookSchema);
