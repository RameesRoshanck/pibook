import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AdminNav from '../AdminComponent/AdminNav/AdminNav';
import AdminSidebar from '../AdminComponent/AdminSideBar/AdminSidebar';


function Admin() {
  return (
    <Box sx={{ width: '100%' }} style={{backgroundColor:'#000000bf',color:'white'}}>
    <AdminNav/>
   <Grid container rowSpacing={{sm:2}} columnSpacing={{ md:1,}}>
     <Grid container item sm={2} md={3}>
     <AdminSidebar/>
     </Grid>  
   </Grid>
 </Box>
  )
}

export default Admin