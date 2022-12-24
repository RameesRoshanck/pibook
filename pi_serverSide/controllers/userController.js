const bcrypt = require('bcrypt');
const User=require ('../models/user');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
// var sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"ckmhdroshan@gmail.com",
        pass:"snzmrppjrlkpdkwi"
    }
})

// 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

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
        // user.then((user)=>{
        //     transporter.sendMail({
        //         to:user.email,
        //         from:"no-replay@pibook.com"
        //     })
        // })
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
                // console.log(isMatch,'gdfg');
                if(isMatch){
                    console.log('success');
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

const resetpass=(req,res)=>{
    const {email}=req.body
        crypto.randomBytes(32,(err,buffer)=>{
            if(err){
                console.log(err);
            }
            const token=buffer.toString("hex")
            User.findOne({email}).then((user)=>{
                if(!user){
                    return res.status(422).json({message:"email is not found"}) 
                }
                user.resetToken=token
                user.expireToken=Date.now() + 3600000
                user.save().then((result)=>{
                    transporter.sendMail({
                        to:user.email,
                        from:"ckmhdroshan@gmail.com",
                        subject:"password reset",
                        html:`
                        <p>you requested for password reset</P>
                        <h3>click in this <a href="http://localhost:8000/reset/${token}"> link</a>to reset password</h3>
                        `
                    }).then(()=>{
                        // console.log('sdfsdfdfgdsf');
                        return res.json({message:"check your Email"})
                    }).catch((error)=>{
                        // console.log(error,'thenfgdfgdsf');
                    })
              
                }).catch((error)=>{
                    // console.log(error,'sdfsdf');
                })

            })
        })
    }

const getReset=(req,res)=>{
       const newPassword=req.body.password
       const sentToken=req.body.token
       User.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}}).then((user)=>{
        if(!user){
            console.log('hai');
            return res.status(422).json({message:"try again session expired"}) 
        }
        bcrypt.hash(newPassword,10).then((hashPassword)=>{
               user.password=hashPassword
               user.resetToken=undefined
               user.expireToken=undefined
               user.save().then((result)=>{
                res.json({message:"password updated success"})
               })
        })
       }).catch((error)=>{
        console.log(error,'getReset');
       })

}


module.exports={
    Signup,
    login,
    resetpass,
    getReset
}