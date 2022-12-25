const Mongoose=require('mongoose')
const {objectId}=Mongoose.Schema.Types



const postSchema=new Mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    img:{
        type:Array
    },
    video:{
        type:Array
    },
    like:{
        type:Array,
        default:[]
    },
    report:{
        type:Array,
        default:[]
    },
    reportStatus:{
        type:String,
        default:'false'
    },
    postedby:{
     type:objectId,
     ref:"user"
    },
     createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports=Mongoose.model("post",postSchema)