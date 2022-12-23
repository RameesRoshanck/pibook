const bcrypt = require('bcrypt');
const { create } = require('../models/user');
const User=require ('../models/user')



const Signup=async(req,res)=>{
    console.log(req.body,'signup');
    try{
        const{username,email,phone,password}=req.body
     
        if(!(username && email && phone && password)){
           return res.status(400).json({message:"all input are required"})
        }
        let emailExist=await User.findOne({email})

        if(emailExist){
            return res.status(200).json({message:"this email is already exist"})
        }
        let phoneExist=await User.findOne({phone})
        if(phoneExist){
            return res.status(200).json({message:"This phone number is already exist"})
        }
        
        const hash=await bcrypt.hash(password,10)

        const user=await User.create({
            username,
            email,
            phone,
            password:hash,
            status:true
        })
        return res.status(200).json({message:"successfully Registered",user})
    }catch(error){
        console.log(error,'Signup error');
    }
}


const login=async(req,res)=>{
    console.log(req.body,'login');
    const {email,password}=req.body
    try{
        if(!(email && password)){
            return res.status(400).json({message:"all input are required"}) 
        }
        let emailExist=await User.findOne({email})
            if(emailExist){
                let isMatch=await bcrypt.compare(password,emailExist.password)
                console.log(isMatch,'gdfg');
                if(isMatch){
                    return res.status(200).json({message:"successfully logined"})
                    }else{
                    return res.status(200).json({message:"incorect password"})
                }
            }else{
            return res.status(200).json({message:"Incorrect email Id"})
        }    
    }catch(error){
        console.log('login error',error);
    }
}


module.exports={
    Signup,
    login
}