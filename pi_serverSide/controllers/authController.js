const bcrypt = require('bcrypt');
const User=require ('../models/user');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
const userOtpVerification=require('../models/userOtpVerification');


const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"ckmhdroshan@gmail.com",
        pass:"snzmrppjrlkpdkwi"
    }
})





/* -------------------------- //user authentication ------------------------- */
const Signup=async(req,res)=>{
    // console.log(req.body,'signup');
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
       

        const user=await new User({
            username,
            email,
            phone,
            password:hash,
            status:true,
            verified:false
        })
        await user.save().then((createuser)=>{
            sendOtp(createuser,res)
        })
        console.log(user,'user');
        return res.status(200).json({message:"successfully Registered",user})
    }catch(error){
        console.log(error,'Signup error');
    }
}


const login=async(req,res)=>{
    // console.log(req.body,'login');
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
                    let user=emailExist
                    // console.log(user,'emailexist user');
                    return res.status(200).json({message:"successfully logined",user})
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


/* ---------------------------- //forget password --------------------------- */
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
                        <h3>click in this <a href="http://localhost:3000/reset/${token}"> link</a>to reset password</h3>
                        `
                    }).then(()=>{
                        console.log('sdfsdfdfgdsf');
                        return res.json({message:"check your Email"})
                    }).catch((error)=>{
                        console.log(error,'thenfgdfgdsf');
                    })
              
                }).catch((error)=>{
                    console.log(error,'sdfsdf');
                })

            })
        })
    }

const getReset=(req,res)=>{
       const newPassword=req.body.reset.password
       const sentToken=req.body.token
    //    console.log(req.body.reset.password,'jkkjj');
       User.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}}).then((user)=>{
        if(!user){
            // console.log('hai');
            return res.status(422).json({message:"try again session expired"}) 
        }
        bcrypt.hash(newPassword,10).then((hashPassword)=>{
               user.password=hashPassword
               user.resetToken=undefined
               user.expireToken=undefined
               user.save().then((result)=>{
                console.log('success');
                res.json({message:"password updated success"})
               })
        })
       }).catch((error)=>{
        console.log(error,'getReset');
       })

}


/* --------------------- //user otp emaile verification --------------------- */
//send otp
const sendOtp=async({_id,email},res)=>{
   try{
            const otp=`${Math.floor(1000 + Math.random() * 9000)}`
            console.log(otp,'user');
                // User.findOne({email}).then(async (user)=>{
                //     console.log(user,'user');
                //     if(!user){
                //         return res.status(422).json({message:"email is not found"}) 
                //     }
                    const maileOption={
                        from:"ckmhdroshan@gmail.com",
                        to:email,
                        subject:"verify your email",
                        html:`
                        <p>enter ${otp} in the app to verify your email address</p>
                        <p>This code <b> expire in 1 hour <b></P>
                        `
                    }
                    const userOtp=await new userOtpVerification({
                        userId:_id,
                        otp,
                        createdAt:Date.now(),
                        expireAt:Date.now() + 3600000
                    })
                   await userOtp.save()
                   transporter.sendMail(maileOption)
                   console.log("successfull maileoption", userOtp);
                   return res.json({message:"Verification email otp send",userOtp})
                // })
   }catch(error){
    console.log(error,'sendOtp');
   }
}

const verifyOtp=async(req,res)=>{
    console.log(req.body,'req.body');
    try{
        const { userId,otp}=req.body
        if(!(userId && otp)){
            return res.status(400).json({message:"all input are required"}) 
        }
        const verifyOtp=await userOtpVerification.findOne({userId:userId})
            console.log(verifyOtp,'veryfyOtp');
        if(!verifyOtp){
            return res.status(400).json({message:"the account doesn't exist or has been verified already"}) 
        }else{
            const expireAt=verifyOtp.expireAt
            const databaseOtp=verifyOtp.otp
            console.log(expireAt,"expire at");
            console.log(databaseOtp,"databaseOtp at");
            if(expireAt < Date.now()){
                await userOtpVerification.deleteMany({userId})
                    return res.status(400).json({message:"otp has been required.please request again."})  
                
            }else{
                const validOtp=await userOtpVerification.find({databaseOtp,otp})
                if(!validOtp){
                    return res.status(400).json({message:"invalid code passed.check your inbox"}) 
                }else{
                  await User.updateOne({_id:userId},{
                    $set:{
                        verified:true
                    }
                })
                await userOtpVerification.deleteMany({userId})
                console.log('successfully verified');
                return res.json({message:"successfully verified"}) 
               }
        }
    }
    }catch(error){
        console.log(error,'verifyotp');
    }
}





module.exports={
    Signup,
    login,
    resetpass,
    getReset,
    verifyOtp

}