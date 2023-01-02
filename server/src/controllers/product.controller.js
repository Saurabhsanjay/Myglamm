const productModel=require("../model/product.model")

const productRoute=async(req,res)=>{

try {
    const newProduct = new productModel({
      Makeup: req.body.Makeup,
      SkinCare: req.body.SkinCare,
      Shampoo:req.body.Shampoo,
      SanitizingCare:req.body.SanitizingCare,
      CollectionProducts:req.body.CollectionProducts
  
    });
    const product = await newProduct.save();
    console.log(product.Makeup + ' saved to makeupAndCollectionsProduct collection.');
    return res.status(201).send({ message: 'Product successfully created', product} );
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: 'Internal server error' });
  }


}
const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    return res.status(200).send({ message:"fetched successfully",products });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: 'Internal server error' });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).send({ error: 'Product not found' });
    }
    return res.status(200).send({ product });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: 'Internal server error' });
  }
};

module.exports={productRoute,getAllProducts,  getProductById}