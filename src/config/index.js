import {config as dotenvConfig} from 'dotenv'

dotenvConfig();

export const config = {
    environment: {
        SECRET: process.env.NODE_JWT_SECRET
    }
}
