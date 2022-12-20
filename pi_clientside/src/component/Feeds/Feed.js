import React from 'react'
import Getpost from '../Getpost/Getpost'
import Post from '../Post/Post'
import Status from '../status/Status'
import './feed.css'


function Feed({userStatus}) {

  const AddStatus=()=>{
    return(
      <>
       
       <Post/>
       <Getpost/> 
      </>
    )
  }

  const RemoveStatus=()=>{
    return(
      <>
      <Status/>
       <Post/>
       <Getpost/>  
      </>
    )
  }

  return (
    <div className='feed'>
        <div className="feedWrapper">
          {
            userStatus?
            <AddStatus/> :
            <RemoveStatus/>  
          }
          
        </div>
    </div>
  )
}

export default Feed