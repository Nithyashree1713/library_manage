import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    publishedDate: {
        type: Date,
        required:true
    },
    
    image:{
        type:String,
        required:true
    },
},
{
    timestamps:true
}
);
const Product=mongoose.model('Product',productSchema);
export default Product;