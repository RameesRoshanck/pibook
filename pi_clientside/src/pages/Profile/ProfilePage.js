import React from 'react'
import Feed from '../../component/Feeds/Feed'
import Navbar from '../../component/navbar/Navbar';
import Rightbar from '../../component/Rightbar/Rightbar'
// import Sidebar from '../../component/Sidebar/Sidebar'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './profilePage.css'
import image from '../../assets/elonmask.jpeg'
import backCoverPhoto from '../../assets/background.jpeg'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Container from '@mui/material/Container';


function ProfilePage() {
  return (
        <Box>
        <Navbar/>
        <Grid rowSpacing={{sm:0,md:0}} columnSpacing={{ md:1,}} style={{paddingTop:'65px'}}>
            <Grid item sm={12} md={12}>
                {/* <Sidebar/> */}
                <Container  >
                <Container className='hidden md:block' >
                <Container className='hidden md:block'>
                <Grid item sm={12} md={12} className="profile">
                    <Grid item sm={12} md={12} className="profileTop">
                        <Grid className="profileCover">
                            <img src={backCoverPhoto} alt="coverPhoto" className='profileCoverPhoto' />
                            <img src={image} alt="CoverPhoto" className='profileCoverUserImage' />
                            <PhotoCameraIcon className='profileCoverUserImageIcon' />
                        </Grid>
                        <br/>
                        <Grid className="profileInfo">
                        <h3 className="profileInfoName">Mohamed Ramees Roshan Ck</h3>
                        <span className="profileinfoDiscretion">hello,how are you. where you go i'am there</span>
                        </Grid>
                    </Grid>
                    <Grid container rowSpacing={{sm:2}} columnSpacing={{ md:1,}} className="profileBottom" >
                        <Grid container item sm={12}  md={4}>
                            <Rightbar userProfile/>
                        </Grid>
                        <Grid  container item sm={12} md={8}>
                            <Feed userStatus/>
                        </Grid>
                       
                    </Grid>
                </Grid>
                </Container>
               </Container>
               </Container>
            </Grid>
        </Grid>
    </Box>
  )
}

export default ProfilePage