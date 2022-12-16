import React from 'react'
import Status from '../status/Status'
import './feed.css'

function Feed() {
  return (
    <div className='feed'>
        <div className="feedWrapper">
          <Status/>
        </div>
    </div>
  )
}

export default Feed