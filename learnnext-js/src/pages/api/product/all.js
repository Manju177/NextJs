import { connectDB } from "../../../../utils/database"

export default async function all(req,res){

    await connectDB()
    const products=[{
        name:'macbook',
        price:232222,
        category:'laptop'
    },
    {
        name:'Acer',
        price:23222,
        category:'laptop'
    }]
    
    res.status(200).json({
        success:true,
        products
        })
  }