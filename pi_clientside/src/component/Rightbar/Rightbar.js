import React, { Fragment } from 'react'
import './rightbar.css'
import image from '../../assets/elonmask.jpeg'
import Button from '@mui/material/Button';

function Rightbar({userProfile}) {

  const HomeRightBar=()=>{
    return(
     <div className="HomeRightBar">
        <h4 className="rightBarTitle ">Online Friends</h4>
           <hr className='posthr' />
            <ul className="rightBarFriendsList">
               <li className="rightbarFriends">
                 <div className="rightbarProfileImageContainer">
                  <img src={image} alt="img" className='rightBarProfileImg' />
                  <span className="rightBarOnline"></span>
                 </div>
                 <span className='rightBarUserName'>Roshan ck</span>
                 <Button className='follows' variant="contained">Follow</Button>
                </li>
            </ul>
      </div>
    )
  }


  const ProfilePage=()=>{
    return(
      <>
      <h3 className='profileRightBarTitle' >User Profile:</h3>
      <div className='rightBarInfo mb-8'>
        <div className="rightbarInfoItem mb-1">
          <span className="rightbarInfPlace">City:</span>
          <span className="rightbarInfPlaceName">Kottakkal</span>
        </div>
        <div className="rightbarInfoItem mb-1 ">
          <span className="rightbarInfPlace">From:</span>
          <span className="rightbarInfPlaceName">Edarikode</span>
        </div>
        <div className="rightbarInfoItem mb-1">
          <span className="rightbarInfPlace">Relationship:</span>
          <span className="rightbarInfPlaceName">Single</span>
        </div>
      </div>
      <h2>User Friends</h2>
      <div className="rightBarFollowings">
        <div className="rightBarFollowing">
          <img src={image} alt="FollowersImage" className="rightBarFollowingImage" />
          <span className="rightBarFollowingName">Mohamed Ramees Roshan Ck</span>
        </div>
        <div className="rightBarFollowing">
          <img src={image} alt="FollowersImage" className="rightBarFollowingImage" />
          <span className="rightBarFollowingName">Mohamed Ramees Roshan Ck</span>
        </div>
        <div className="rightBarFollowing">
          <img src={image} alt="FollowersImage" className="rightBarFollowingImage" />
          <span className="rightBarFollowingName">Mohamed Ramees Roshan Ck</span>
        </div>
        <div className="rightBarFollowing">
          <img src={image} alt="FollowersImage" className="rightBarFollowingImage" />
          <span className="rightBarFollowingName">Mohamed Ramees Roshan Ck</span>
        </div>
        <div className="rightBarFollowing">
          <img src={image} alt="FollowersImage" className="rightBarFollowingImage" />
          <span className="rightBarFollowingName">Mohamed Ramees Roshan Ck</span>
        </div>
        <div className="rightBarFollowing">
          <img src={image} alt="FollowersImage" className="rightBarFollowingImage" />
          <span className="rightBarFollowingName">Mohamed Ramees Roshan Ck</span>
        </div>
      </div>
      </>
    )
  }


  return (
    <Fragment>
        {
            userProfile?
    <div className='rightBar1' style={{marginTop:'9px'}}>
        <div className="rightBarWrapper1">
         
            <ProfilePage/>
        
        </div>
    </div>
    :
       <div className='rightBar' style={{marginTop:'70px'}}>
       <div className="rightBarWrapper">
           <HomeRightBar className='hidden md:block'/>
        
       </div>
   </div>
  }
   </Fragment>
  )
}

export default Rightbar