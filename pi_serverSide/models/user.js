const Mongoose=require ('mongoose')


const userSchema=new Mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    status:{
        type:Boolean,
        required:true
    },
    resetToken:{type:String},
    expireToken:{type:Date},
    verified:{type:Boolean},
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:"" 
    },
    followers:{
        type:Array,
        default:[]
    }
})

module.exports=Mongoose.model('user',userSchema)