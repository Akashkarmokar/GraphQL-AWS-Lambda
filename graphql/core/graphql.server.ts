import { ApolloServer } from '@apollo/server';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import resolvers from '../Resolvers.js'
import { initDBConnection  } from './db_connection.js';
import {schema} from '../TestSchema.js'


export class GraphQLServer extends ApolloServer {
    constructor(){
        super({
            csrfPrevention: false,
            schema: schema
        })
    }
    public static async build(){
        // try {
        //     await initDBConnection()
        // } catch(err){
        //     console.log("======> Data base connection error <=========")
        //     console.log(err);
        //     console.log("======> Data base connection error <=========")
        // }
        return new GraphQLServer()
    }
}


