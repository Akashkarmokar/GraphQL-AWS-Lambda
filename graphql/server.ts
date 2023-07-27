import { ApolloServer } from '@apollo/server';
import { startServerAndCreateLambdaHandler, handlers } from '@as-integrations/aws-lambda';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import resolvers from './Resolvers'


const typeDefs = loadSchemaSync('./**/*.graphql', {
    loaders: [new GraphQLFileLoader()],
});

// Set up Apollo Server
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

// This final export is important!
export const graphqlHandler = startServerAndCreateLambdaHandler(
    server,
    // We will be using the Proxy V2 handler
    handlers.createAPIGatewayProxyEventV2RequestHandler(),
);