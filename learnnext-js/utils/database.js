import mongoose from "mongoose"

export const connectDB=async ()=>{
    try {
        const {connection}=await mongoose.connect("mongodb+srv://NextJs:Nextjs@cluster0.eomyffx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`DataBase Connected on ${connection.host}`);
    } catch (error) {
        console.log(`error`,error)
    }
}