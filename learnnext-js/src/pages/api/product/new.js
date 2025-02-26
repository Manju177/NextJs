import { Product } from "@/model/product";
import { connectDB } from "../../../../utils/database";

export default async(req,res)=>{
    await connectDB()
    const price=2323,name='ACER',category='laptop'
    await Product.create({
        name,price,category
    })  
    res.status(200).json({
        success:true,
        message:'Product Created Bhai'
    })
}