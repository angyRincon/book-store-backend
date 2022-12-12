//@packages
import jwt from 'jsonwebtoken'

//@config
import { config } from "../config/index.js";

export const createToken = (user) => {
    const { SECRET } = config.environment;
    return jwt.sign({ user }, SECRET, {
        expiresIn: '1d'
    })
}
