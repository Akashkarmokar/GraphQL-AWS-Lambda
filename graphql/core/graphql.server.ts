import { ApolloServer } from '@apollo/server';
import { initDBConnection  } from './db_connection.js';
import {schema} from '../TestSchema.js'
import { Mongoose } from 'mongoose'


export class GraphQLServer extends ApolloServer {
    static cachedDatabaseInstance: Mongoose | null = null
    constructor(){
        super({
            csrfPrevention: false,
            schema: schema,
            introspection: process.env.APP_ENV === 'production' ? false : true
        })
    }
    public static async build(){
        if ( !GraphQLServer.cachedDatabaseInstance ){
            GraphQLServer.cachedDatabaseInstance = await initDBConnection()
        }
        return new GraphQLServer()
    }
}


