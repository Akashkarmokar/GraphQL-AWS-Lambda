import { ApolloServer } from '@apollo/server';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import resolvers from '../Resolvers.js'
import { initDBConnection  } from './db_connection.js';
import {schema} from '../TestSchema.js'
import { Connection, Mongoose } from 'mongoose'


export class GraphQLServer extends ApolloServer {
    static dbConnectionString : string =  "mongodb+srv://akash:cse161115043@cluster0.x8wsiyt.mongodb.net/"
    static cachedDatabaseInstance: Mongoose | null = null
    constructor(){
        super({
            csrfPrevention: false,
            schema: schema,
        })
    }
    public static async build(){
        if ( !GraphQLServer.cachedDatabaseInstance ){
            GraphQLServer.cachedDatabaseInstance = await initDBConnection(GraphQLServer.dbConnectionString)
        }
        return new GraphQLServer()
    }
}


