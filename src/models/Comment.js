import { Schema, model } from "mongoose";
import { modelExtraConfig } from "../utils/modelExtraConfig.js";

const commentSchema = new Schema({
    content: { type: String, required: true },
    positiveVotes: Number,
    negativeVotes: Number,
    book: {
        ref: 'Book',
        type: Schema.Types.ObjectId
    },
    // user: {
    //   ref: 'User',
    //   type: Schema.Types.ObjectId
    // }
}, modelExtraConfig())

export default model('Comment', commentSchema)
