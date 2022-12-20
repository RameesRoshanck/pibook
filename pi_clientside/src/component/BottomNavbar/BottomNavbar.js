import React from 'react'
import './bottomNavbar.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

function BottomNavbar() {
  return (
    <Box className='md:hidden sticky bottom-0' sx={{ flexGrow: 1 }}>
        <Grid className='header'>
            <Grid><HomeIcon/></Grid>
            <Grid><SearchIcon/></Grid>
            <Grid><OndemandVideoIcon/></Grid>
            <Grid><ChatBubbleOutlineIcon/></Grid>
            <Grid><PersonOutlineIcon/></Grid>
        </Grid>
   </Box>
  )
}

export default BottomNavbar