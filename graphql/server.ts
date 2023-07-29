import { ApolloServer } from '@apollo/server';
import { startServerAndCreateLambdaHandler, handlers} from '@as-integrations/aws-lambda';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import resolvers from './Resolvers'
import { initDBConnection } from './core/db_connection';
// import { OurApolloGraphQLServer } from './core/graphql.server'
import { APIGatewayProxyEvent } from 'aws-lambda';


const typeDefs = loadSchemaSync('./**/*.graphql', {
    loaders: [new GraphQLFileLoader()],
});

// const server = new ApolloServer({
//     typeDefs: typeDefs,
//     resolvers: resolvers
// });

class customeApolloServer extends ApolloServer{
    constructor(){
        super({
            typeDefs: typeDefs,
            resolvers: resolvers
        })
        this.DatabaseConnection()
    }
    public async DatabaseConnection() {
        await initDBConnection()
    }
}

class OurApolloGraphQLServer extends ApolloServer {
    private constructor(){
        super({
            typeDefs: typeDefs,
            resolvers: resolvers
        })
    }
    public static async build(){
        await initDBConnection()
        return new OurApolloGraphQLServer()
    }
}

// const server = await OurApolloGraphQLServer.build()
// let server;
// (async ()=>{
//     server = await OurApolloGraphQLServer.build()
// })()
const server = new customeApolloServer()

export const graphqlHandler = startServerAndCreateLambdaHandler(
    server,
    handlers.createAPIGatewayProxyEventV2RequestHandler(),
);
