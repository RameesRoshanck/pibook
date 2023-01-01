import React, { useContext, useEffect } from 'react'
import Feed from '../component/Feeds/Feed'
import Navbar from '../component/navbar/Navbar'
import Rightbar from '../component/Rightbar/Rightbar'
import Sidebar from '../component/Sidebar/Sidebar'
import BottomNavbar from '../component/BottomNavbar/BottomNavbar'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './homepage.css'
import { UserAuthContext } from '../Context/UserContext'




function HomePage() {

  const {authUser,setAuthUser}=useContext(UserAuthContext)
  useEffect(()=>{
    console.log(authUser,'usercontext');
  })

  
  return (
    // <div>
    //     <Navbar/>
    //     <div className="homecontainer">
    //     <Sidebar/>
    //     <Feed/>
    //     <Rightbar/>
    //     </div>
    // </div>
     <Box sx={{ width: '100%' }}>
      <Navbar/>
     <Grid  container rowSpacing={{sm:0,md:0}} columnSpacing={{ md:1,}}>
       <Grid container item sm={12} md={3} lg={3}>
       <Sidebar/>
       </Grid>
       <Grid container item sm={12} md={6}>
       <Feed/>
       </Grid>
       <Grid container item md={3}>
       <Rightbar/>
       </Grid>
       <Grid container item sm={12}>
       <BottomNavbar/>
       </Grid>
     </Grid>
   </Box>
  )
}

export default HomePage