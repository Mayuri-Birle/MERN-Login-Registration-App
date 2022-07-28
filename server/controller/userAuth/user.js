const User = require("../../models/user");

const RegisterUser = async(req, res)=>{
    try {
        console.log(req.body)
        const user = await User.create(req.body)       
       
        res.json({message:"Registered Successfully", status: 200})
    } catch (error) {
        console.log(error)
        res.status(400).json({err: "Duplicate Email", message:"Not Created"})
    }
}

const LoginUser = async(req, res)=>{
    try {
        const user = await User.find({email:req.body.email, password: req.body.password}) 
        console.log(user)
        if(user) return res.json({status: ok, user:true})
       
    } catch (error) {
        console.log(error)
        res.status(400).json({err: error, message:"Not Found"})
    }
}

module.exports = {RegisterUser, LoginUser}