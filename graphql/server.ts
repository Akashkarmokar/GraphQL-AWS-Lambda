import { startServerAndCreateLambdaHandler, handlers} from '@as-integrations/aws-lambda';
import { GraphQLServer } from './core/graphql.server.js'


const server = await GraphQLServer.build()

export const graphqlHandler = startServerAndCreateLambdaHandler(
    server,
    handlers.createAPIGatewayProxyEventV2RequestHandler(),
);
