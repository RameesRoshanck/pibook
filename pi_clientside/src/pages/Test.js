import React from 'react'
import './test.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';



function Test() {

return (
  <Box sx={{ flexGrow: 1 }}>
  <Grid className='header'>
    <Grid><HomeIcon/></Grid>
    <Grid><GroupIcon/></Grid>
    <Grid><OndemandVideoIcon/></Grid>
    <Grid><ChatBubbleOutlineIcon/></Grid>
    <Grid><PersonOutlineIcon/></Grid>
  </Grid>
</Box>
  )
}

export default Test