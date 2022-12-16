//@packages
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';

//@gql
import { resolvers, typeDefs } from './gql/index.js';

//@db
import { connectDataBase } from "./database.js";

//@middlewares
import { createRoles } from "./middlewares/createRoles.js";
import { convertToken } from "./utils/convertToken.js";


const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true
})


const startServer = async () => {
    const { url } = await startStandaloneServer(
        server,
        {
            listen: { port: 4000 },
            context: async ({ req }) => await convertToken(req.headers.bearer)
        }
    )
    console.log('Listening on', url)
}

Promise.all([
    createRoles(),
    startServer(),
    connectDataBase()
]).then(() => console.log('Successfully connected'))

