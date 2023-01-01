const Post=require('../models/userPost')
const User=require ('../models/user')



//create post
const addPost=async(req,res)=>{
    try{
         const post=await new Post(req.body)
        await post.save()
        return res.status(200).json({message:"successfully insert the post",post})

    }catch(error){
        console.log(error,'addpost');
    }
}


//update post
const updatePost=async(req,res)=>{
    try{
        const desc=req.body.desc
        const postId=req.params.id
        let post=await Post.findOne({postId})
        if(post.userId===req.body.userId){
            // console.log(post,'post details');
            if(!desc){
                return res.json({message:"The post couldn't update"}) 
            }else{
                await Post.updateOne({_id:postId},
                    {
                        $set:{desc:desc}
                    })
                    return res.status(200).json({message:"your post successfully updated"}) 
                }
            }else{
                return res.json({message:"you can update onlly your post"})
            } 
    }catch(error){
        console.log(error,'updatePost');
    }
}


//delete the post
const deletePost=async(req,res)=>{
    try{
        const postId=req.params.id
        let post=await Post.findOne({postId})
        if(post.userId===req.body.userId){
            await Post.deleteOne({postId})
            return res.status(200).json({message:"your post successfully Deleted"}) 
            }else{
                return res.json({message:"you can Delete onlly your post"})
            } 
    }catch(error){
        console.log(error,'updatePost');
    }
}


//like and dislike a post
const likePost=async(req,res)=>{
    try{
        let postId=req.params.id
        let userId=req.body.userId
        let post=await Post.findById(postId)
        // console.log(post,'post');
        if(!post.like.includes(userId)){
            await Post.updateOne({$push:{like:userId}})
            return res.status(200).json({message:"your post has been liked"}) 
        }else{
            await post.updateOne({$pull:{like:userId}})
            return res.status(200).json({message:"your post has been Unliked"}) 
        }
    }catch(error){
        console.log(error,'likePost');
    }
}


//get a post
const getPost=async(req,res)=>{
    try{
        let PostId=req.params.id
        let post=await Post.findById(PostId).populate('userId')
        // console.log(post);
        return res.status(200).json({message:"get sigle post successfully",post}) 
    }catch(error){
        console.log(error,'getPost');
    }

}

//get timeline
const getTimeLine=async(req,res)=>{
      try{
        let userId=req.body.userId
         let postArray=[]
         let currentUser=await User.findById(userId)
         console.log(currentUser,'hai time line curent user');
         let userPost=await Post.find({userId:currentUser._id})
         
      }catch(error){
        console.log(error,'gettime line');
      }
}


module.exports={
    addPost,
    updatePost,
    deletePost,
    likePost,
    getPost,
    getTimeLine
}