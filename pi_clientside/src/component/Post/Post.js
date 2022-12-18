import React from 'react'
import './post.css'
import image from '../../assets/elonmask.jpeg'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ShareIcon from '@mui/icons-material/Share';

function Post() {
  return (
    <div className='post' >
        <div className="postWrapper">
            <div className="share-top">
              <img src={image} alt="images" className='postProfielImg'/>
              <input type="text" placeholder="What's in your mind?" className="postInput" />
            </div>
          <hr className='posthr' />
            <div className="share-bottom">
                    <div className="shareOption">
                        <AddAPhotoIcon htmlColor="tomato" className='shareIcons'/>
                        <span className='shareOptionText' >photos</span>
                    </div>
                    <div className="shareOption">
                        <PermMediaIcon htmlColor="green" className='shareIcons'/>
                        <span className='shareOptionText' >videos</span>
                    </div>
                    <div className="shareOption">  
                        <button className='ShareButton' ><ShareIcon htmlColor="blue" className='shareIcons'/>Share</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Post