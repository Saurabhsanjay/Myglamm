const express=require('express')
const Router=express.Router();
const {signin,login}=require("../controllers/auth.controller")

const{productRoute}=require("../controllers/product.controller")

Router.use("/signin",signin);
Router.use("/login",login);
Router.use("/products",productRoute)

module.exports=Router;