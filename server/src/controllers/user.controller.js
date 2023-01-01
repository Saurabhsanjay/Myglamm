const jwt=require('jsonwebtoken');

const UserModel=require("../model/user.model")
const data=async(req,res)=>{
    const{token}=req.body;
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        const user=await UserModel.findById(decoded._id);

        if(!user){
            return res.status(404).send({error:"User not found"})
        }
        return res.status(200).send({id: user._id, name: user.name, email: user.email })

    }catch(err){
        return res.status(401).send({ error: "Invalid token" });
    }
}


module.exports={data}