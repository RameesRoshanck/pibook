const User=require('../models/user')

//update user details
const updateUser=(req,res)=>{

}

//delete userAccounte


//get a user
const getSingleUser=async(req,res)=>{
    try{
        let id=req.params.id
        let users=await User.findById(id)
        //remove unnessary items(eg:password,updated at,etc.....)
        const {password,updatedAt,__v,...user}=users._doc
        return res.status(200).json({user})
    }catch(error){
        console.log(error,'getSingleUser');
    }
}


//follow a user
const followUser=async(req,res)=>{
    console.log('hai');
  try{
      let paramsId=req.params.id
      let userId=req.body.userId
    //   console.log(paramsId,userId,'params id and user id');
      if(userId !== paramsId){
        let user=await User.findById(paramsId)
        let currentUser=await User.findById(userId)
        if(!user.followers.includes(userId)){
            await user.updateOne({$push:{followers:userId}})
            await currentUser.updateOne({$push:{followings:paramsId}})
            return res.status(200).json({message:"user has been followed"})
        }else{
            return res.status(403).json({message:"you already follow this user"})
        }
      }else{
        return res.status(403).json({message:"you can't follow yourself"})
      }

  }catch(error){
    console.log(error,'followUser')
  }
}

//unfollow user
const unFollowUser=async(req,res)=>{
    console.log('hai');
  try{
      let paramsId=req.params.id
      let userId=req.body.userId
    //   console.log(paramsId,userId,'params id and user id');
      if(userId !== paramsId){
        let user=await User.findById(paramsId)
        let currentUser=await User.findById(userId)
        if(user.followers.includes(userId)){
            await user.updateOne({$pull:{followers:userId}})
            await currentUser.updateOne({$pull:{followings:paramsId}})
            return res.status(200).json({message:"user has been Unfollowed"})
        }else{
            return res.status(403).json({message:"you already unfollow this user"})
        }
      }else{
        return res.status(403).json({message:"you can't unfollow yourself"})
      }

  }catch(error){
    console.log(error,'followUser')
  }
}




module.exports={
    updateUser,
    getSingleUser,
    followUser,
    unFollowUser
}