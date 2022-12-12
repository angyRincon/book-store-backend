//@packages
import { Schema, model } from "mongoose";

//@utils
import { modelExtraConfig } from "../utils/modelExtraConfig.js";

const roleSchema = new Schema({
    name: { type: String}
}, modelExtraConfig());

export default model('Role', roleSchema);
