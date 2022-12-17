import React from 'react'
import './post.css'
import image from '../../assets/elonmask.jpeg'

function Post() {
  return (
    <div className='post' >
        <div className="postWrapper">
          <div className="share-top">
          <img src={image} alt="images" className=''/>
          </div>
          <div className="share-bottom">

          </div>
        </div>
    </div>
  )
}

export default Post