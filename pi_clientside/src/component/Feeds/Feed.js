import React, { Fragment, useEffect, useState } from 'react'
import Getpost from '../Getpost/Getpost'
import Post from '../Post/Post'
import Status from '../status/Status'
import './feed.css'
import {Posts} from '../../Dummydata'
import axios from 'axios'


function Feed({userStatus}) {
// console.log(Posts,'feed posts');
   
      const [post,setPost]=useState([])

      useEffect(()=>{
       
      },[])
    
  const AddStatus=()=>{
    return(
      <>
       
       <Post/>
       {
        Posts.map((data)=>{
          return(
          <Getpost key={data.id} post={data} /> 
          )
        })
      }
      </>
    )
  }

  const RemoveStatus=()=>{
    return(
      <>
      <Status/>
      <Post/>
      {
        Posts.map((data)=>{
          return(
          <Getpost key={data.id} post={data} /> 
          )
        })
      }
      </>
    )
  }

  return (
    <Fragment>
       {
            userStatus?
    <div className='feed1'>
        <div className="feedWrapper1">
            <AddStatus/> :
        </div>
    </div>
    :
    <div className='feed'>
        <div className="feedWrapper">
            <RemoveStatus/>  
        </div>
    </div>
     }
          
    </Fragment>
  )
}

export default Feed