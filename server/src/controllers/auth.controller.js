const jwt=require("jsonwebtoken");
require('dotenv').config()
const bcrypt=require("bcrypt");
const UserModel=require('../model/user.model')

const signin=async(req,res)=>{
    const {name,email,password}=req.body;


const user =await UserModel.findOne({email});
    if(user){
        return res.status(400).send({error:'user already exists'});
    }

    bcrypt.hash(password,10,async(err,hash)=>{
        if(err){
            return res.status(500).send({error:"internal server error"})
        }
        try{
           const newUser=await UserModel.create({name,email,password:hash});
            return res.status(201).send({user:newUser});
        }catch(err){
            return res.status(500).send({error: "Internal server error"})
        }
    })
}

const login = async(req,res)=>{
    const{email,password}=req.body;


const user=await UserModel.findOne({email});

if(!user){
    return res.status(404).send({error:"User not found"});
}
bcrypt.compare(password,user.password,async(err,result)=>{

if(err){
    return res.status(500).send({error:"Internal server error"})
 
}
if (!result) {
    return res.status(401).send({ error: "Invalid credentials" });
  }
const token =jwt.sign({_id: user._id},process.env.JWT_SECRET,{
    expiresIn:"5h",
})
return res.status(200).send({token,name:user.name,email,password});
})
}

module.exports={signin, login};