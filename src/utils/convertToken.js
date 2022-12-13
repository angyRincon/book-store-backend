//@packages
import jwt from "jsonwebtoken";

//@config
import { config } from "../config/index.js";

export const convertToken = async (token) => {
    try {
        const { SECRET } = config.environment
        const verified = jwt.verify(token, SECRET);
        return { user: verified.user }
    } catch (e) {
        console.log('Error', e.message)
    }
}
