import mongoose, { Mongoose } from "mongoose";


export const initDBConnection = async (connectionString: string = '') =>{
    let connectionInstance =  null;
    try {
        connectionInstance = await mongoose.connect(connectionString)
    }catch (err){
        console.log(`Database connection error ${err}`)
    } finally {
        return connectionInstance
    }
}