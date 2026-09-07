import mongoose from "mongoose";

export const connectedDB =async ()=>{
 try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDb connected successfully');
 } catch (error) {
    console.error("Mongodb connection error",error.message);
    process.exit(1);
 }
}