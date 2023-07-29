import { ApolloServer } from '@apollo/server';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import resolvers from '../Resolvers.js'
import { initDBConnection  } from './db_connection.js';


const typeDefs = loadSchemaSync('./**/*.graphql', {
    loaders: [new GraphQLFileLoader()],
});

export class GraphQLServer extends ApolloServer {
    constructor(){
        super({
            typeDefs: typeDefs,
            resolvers: resolvers,
        })
    }
    public static async build(){
        await initDBConnection()
        return new GraphQLServer()
    }
}


