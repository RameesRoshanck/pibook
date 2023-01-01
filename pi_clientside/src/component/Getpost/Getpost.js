import React, { useState } from 'react'
import './getpost.css'
import image from '../../assets/elonmask.jpeg'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import {Users} from  '../../Dummydata'

function Getpost({post}) {

    const[open,setOpen]=useState(false)
    const [like,setLike]=useState(post.like)
    const [islike,setIslike]=useState(false)

    const likeSubmit=()=>{
        setLike(islike ? like-1:like+1)
        setIslike(!islike) // it means or setislike(islike===false)
    }

    const PF=process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='getpost'>
        <div className="getPostWrapper">
            <div className="getPostTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u=>u.id===post.userId)[0].username} alt="images" className='getPostProfielImg'/>
                    <div>
                        <p className='postUserName' >{Users.filter(u=>u.id===post.userId)[0].username}</p>
                        <p className="postDate pl-2">{post?.date}</p>
                    </div>
                </div>
                <div className="postTopRight">
                  <MoreVertIcon/>
                </div>
            </div>
            <div className="getPostCenter my-2">
                <span className="postText">{post?.desc}</span>
                <img src={post.image} alt="images" className='post-image mt-2'/>
            </div>
            <div className="getPostBottom mt-7">
                <div className="postbottomLeft p-2 flex justify-between">
                    <div className='text-center'>
                    <ThumbUpIcon htmlColor='#9e9e9e' onClick={likeSubmit} className='likebutton' />
                    <span className='postLikeCouter'>{like} K</span>
                    </div>
                    <div>
                    <ChatBubbleOutlineIcon htmlColor="green"  className='likebutton' />
                    <span onClick={(e)=>setOpen(!open)} className='postLikeCouter'>{post?.comment} comments</span>
                    </div>
                    <div>
                    <ShareIcon htmlColor='tomato' className='likebutton' />
                    <span className='postLikeCouter'>Share</span>
                    </div>
                </div>
                <hr className='posthr' />
                {open?
                <div>
                <div className="postbottomComment">
                
                    <div className='Comment flex my-3'>
                        <img src={image} alt="images" className='cmmnt-img'/>
                        <div>
                            <p className='postUserName' >mohamed Ramees ck</p>
                            <p className="postDate pl-2">5 min ago</p>
                        </div>
                         <p className='text-cmd'>hai how are you</p>
                    </div>
                    <div className='Comment flex my-3'>
                        <img src={image} alt="images" className='cmmnt-img'/>
                        <div>
                            <p className='postUserName' >mohamed Ramees ck</p>
                            <p className="postDate pl-2">5 min ago</p>
                        </div>
                         <p className='text-cmd'>hai how are you</p>
                    </div>
                    <div className='Comment flex my-3 '>
                        <img src={image} alt="images" className='cmmnt-img'/>
                        <div>
                            <p className='postUserName' >mohamed Ramees ck</p>
                            <p className="postDate pl-2">5 min ago</p>
                        </div>
                         <p className='text-cmd'>hai how are you</p>
                    </div>
                   
                </div>
                <div className='flex mt-5 userComment'>
                        <input placeholder='write the comment' type="text" className='comments' />
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </div>
                </div>
                :""}
            </div>
        </div>
    </div>
  )
}

export default Getpost