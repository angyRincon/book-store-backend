//@packages
import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs'

//@utils
import { modelExtraConfig } from "../utils/modelExtraConfig.js";

const userSchema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    displayName: { type: String, required: true, unique: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            'Please provide a valid email address'
        ]
    },
    roles: [{
        ref: 'Role',
        type: Schema.Types.ObjectId
    }]
}, modelExtraConfig());


userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSaltSync(10);
    return await bcrypt.hash(password, salt);
}

userSchema.statics.comparePassword = async (password, dbPassword) => {
    return await bcrypt.compare(password, dbPassword);
}

export default model('User', userSchema);
