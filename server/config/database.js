
import mongoose from "mongoose";

export const connectDatabase = async () =>{
    try {
       const {dbconnection} = await mongoose.connect(process.env.MONGO_URI)
            console.log(`Db connected: ${dbconnection}`)
    } catch (error) {
        console('Error connectingDB')
    }
}