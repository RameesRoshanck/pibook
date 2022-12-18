import React from 'react'
import './rightbar.css'
import image from '../../assets/elonmask.jpeg'

function Rightbar() {
  return (
    <div className='rightBar mt-4'>
        <div className="rightBarWrapper">
          <h4 className="rightBarTitle">Online Friends</h4>
          <hr className='posthr' />
          <ul className="rightBarFriendsList">
            <li className="rightbarFriends">
              <div className="rightbarProfileImageContainer">
              <img src={image} alt="img" className='rightBarProfileImg' />
              <span className="rightBarOnline"></span>
              </div>
              <span className='rightBarUserName'>Roshan ck</span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Rightbar