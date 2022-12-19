import React from 'react'
import Feed from '../../component/Feeds/Feed'
import Navbar from '../../component/navbar/Navbar';
import Rightbar from '../../component/Rightbar/Rightbar'
import Sidebar from '../../component/Sidebar/Sidebar'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './profilePage.css'
import image from '../../assets/elonmask.jpeg'
import backCoverPhoto from '../../assets/background.jpeg'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';


function ProfilePage() {
  return (
        <Box sx={{ width: '100%' }}>
        <Navbar/>
        <Grid container rowSpacing={{sm:2}} columnSpacing={{ md:1,}}>
            <Grid container item sm={12} md={3}>
                <Sidebar/>
            </Grid>
            <Grid container item sm={12} md={9} className="profile">
                <Grid container item sm={12} md={12} className="profileTop">
                    <Grid className="profileCover">
                        <img src={backCoverPhoto} alt="coverPhoto" className='profileCoverPhoto' />
                        <img src={image} alt="image" className='profileCoverUserImage' />
                        <PhotoCameraIcon className='profileCoverUserImageIcon' />
                    </Grid>
                    <br/>
                    <Grid className="profileInfo">
                    <h3 className="profileInfoName">Mohamed Ramees Roshan Ck</h3>
                    <span className="profileinfoDiscretion">hello,how are you. where you go i'am there</span>
                    </Grid>
                </Grid>
                <Grid container item sm={12} md={12} className="profileBottom">
                    <Grid container item sm={12} md={8}>
                        <Feed/>
                    </Grid>
                    <Grid container item sm={12}  md={4}>
                        <Rightbar/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

export default ProfilePage