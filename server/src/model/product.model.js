const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const productSchema=new Schema(
    {
        id: { type: Number, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        title: { type: String, required: true },
        selection2_url: { type: String },
        description: { type: String, required: true },
        selection3_url: { type: String },
        price: { type: Number, required: true },
        selection4_url: { type: String},
        selection5: { type: String},
        selection5_url: { type: String},
    }
)



const ProductDetailsSchema=new Schema(
    {
        Makeup:[productSchema],
        SkinCare:[productSchema],
        Shampoo:[productSchema],
        SanitizingCare:[productSchema],
         CollectionProducts:[productSchema]


    },
    
)
const products=mongoose.model("ProductDetailsSchema",ProductDetailsSchema)
module.exports=products;