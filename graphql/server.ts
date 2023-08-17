import { startServerAndCreateLambdaHandler, handlers} from '@as-integrations/aws-lambda';
import { GraphQLServer } from './core/graphql.server.js'
import dotenv from 'dotenv'
dotenv.config()

const server = await GraphQLServer.build()

export const graphqlHandler = startServerAndCreateLambdaHandler(
    server,
    handlers.createAPIGatewayProxyEventV2RequestHandler(),
);
