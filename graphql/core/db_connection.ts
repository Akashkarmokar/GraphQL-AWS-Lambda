import mongoose, { Mongoose } from "mongoose";


export const initDBConnection = async () =>{
    let connectionInstance =  null;
    const dbConnectionString: string = process.env.db_connection_string || ''
    try {
        connectionInstance = await mongoose.connect(dbConnectionString)
    }catch (err){
        console.log(`Database connection error ${err}`)
    } finally {
        return connectionInstance
    }
}