const Mongoose= require("mongoose")


const userOtpVerificationSchema=new Mongoose.Schema({
    userId:{type:String},
    otp:{type:String},
    createdAt:{type:Date},
    expireAt:{type:Date}
})

module.exports=Mongoose.model("userOtpVerification",userOtpVerificationSchema)