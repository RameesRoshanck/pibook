const Post=require('../models/userPost')

const addPost=async(req,res)=>{
    try{
        const filename=req.files.map(function(file){
            return file.filename
        })
        req.body.image=filename

        const post=new Post({
            desc,
            img:req.body.image,
            video,
            like,
            report,
            postedby
         
        })
        post.save()
        return res.json({message:"successfully insert the post"})

    }catch(error){
        console.log(error,'addpost');
    }
}

module.exports={
    addPost
}