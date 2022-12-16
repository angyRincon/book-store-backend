import {config as dotenvConfig} from 'dotenv'

dotenvConfig();

export const config = {
    environment: {
        SECRET: process.env.NODE_JWT_SECRET,
        MONGOUSER: process.env.NODE_MONGO_USER,
        MONGOPASSWORD: process.env.NODE_MONGO_PASSWORD,
        MONGOHOST: process.env.NODE_MONGO_HOST,
        MONGOPORT: process.env.NODE_MONGO_PORT,
    }
}
