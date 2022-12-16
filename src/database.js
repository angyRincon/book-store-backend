//@packages
import mongoose from "mongoose";

import { config } from "./config/index.js";

const { MONGOUSER, MONGOPASSWORD, MONGOHOST, MONGOPORT } = config.environment;

const uri = `mongodb://${MONGOUSER}:${MONGOPASSWORD}@${MONGOHOST}:${MONGOPORT}`

export const connectDataBase = async () => {
    try {
        mongoose.set('strictQuery', false);
        const db = await mongoose.connect(uri, {
            useNewUrlParser: true,
        })
        console.log('DB connected at', db.connection.name)
    } catch (e) {
        console.log('Error', e.message)
    }
}
