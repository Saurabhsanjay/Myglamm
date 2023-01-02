const express=require('express')
const Router=express.Router();
const {signin,login}=require("../controllers/auth.controller")

const{productRoute,getAllProducts,getProductById}=require("../controllers/product.controller")

Router.use("/signin",signin);
Router.use("/login",login);
Router.use("/products",productRoute)
Router.get("/getall",getAllProducts)
Router.get("/getall/:id",getProductById)

module.exports=Router;