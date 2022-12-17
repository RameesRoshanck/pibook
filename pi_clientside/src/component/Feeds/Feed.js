import React from 'react'
import Post from '../Post/Post'
import Status from '../status/Status'
import './feed.css'

function Feed() {
  return (
    <div className='feed'>
        <div className="feedWrapper">
          <Status/>
          <Post/>
        </div>
    </div>
  )
}

export default Feed