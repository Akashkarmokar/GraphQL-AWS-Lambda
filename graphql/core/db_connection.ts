import mongoose from "mongoose";


export const initDBConnection = async ()=>{
    let db_connection_string = "mongodb://localhost:27017/project_ak"
    await mongoose.connect(db_connection_string)
    console.log("Database is connected")
}