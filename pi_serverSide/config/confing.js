const Mongoose=require('mongoose')
URL=process.env.URL

const connectDB=async()=>{
    try{
        await Mongoose.connect(URL)
        console.log('database connected');
    }catch(error){
        console.log(error,'database not connect');
    }
}

module.exports=connectDB
