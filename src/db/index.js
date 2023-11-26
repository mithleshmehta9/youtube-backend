import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://mehtamithlesh9:Mehta98242@mithlesh9.eesnep5.mongodb.net/${DB_NAME}`);
        console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection field ", error);
        process.exit(1)
    }
} 

export default connectDB;