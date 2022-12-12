import { Schema, model } from "mongoose";
import { modelExtraConfig } from "../utils/modelExtraConfig.js";

const authorSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    books: [{
        ref: 'Book',
        type: Schema.Types.ObjectId
    }]
}, modelExtraConfig());

export default model('Author', authorSchema);
