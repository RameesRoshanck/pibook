import React,{useState} from 'react'
import './adminSideBar.css'
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigationIcon from '@mui/icons-material/Navigation';
import BlockIcon from '@mui/icons-material/Block';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import ReportIcon from '@mui/icons-material/Report';

function AdminSidebar() {
  const [open,setOpen]=useState(false)
  const [openPost,setOpenPost]=useState(false)
  
  return (
    <div className='sideBar'>
        <div className="sidebarWrapper">
              <ul className="sidebarList">
                <h1 className='dashboard'>Dashboard</h1>
                <li className="sidebarlistItem">
                <HomeIcon className='sidebarIcon' />
                <span className='sidebarListItemText' >Home</span>
                </li>
                <li className="sidebarlistItem1">
                  <div onClick={(e)=>{setOpen(!open)}}>
                      <GroupIcon className='sidebarIcon' />
                      <span className='sidebarListItemText' style={{marginRight:"130px"}} >Users</span>
                      <ExpandMoreIcon/>
                  </div>
                  {open?
                   <div className="user">
                   <ul className='sidebarList'>
                     <li className="childSidebarlistItem2">
                       <NavigationIcon className='sidebarIcon' />
                       <span className='sidebarListItemText' >Active Users</span>
                     </li>
                     <li className="childSidebarlistItem2">
                       <BlockIcon className='sidebarIcon' />
                       <span className='sidebarListItemText' >Blocked Users</span>
                     </li>
                   </ul>
               </div>
                  :""}
                 
                </li>
                <li className="sidebarlistItem1">
                  <div onClick={(e)=>{setOpenPost(!openPost)}}>
                      <FlagIcon className='sidebarIcon' />
                      <span className='sidebarListItemText' style={{marginRight:"130px"}} >Posts</span>
                      <ExpandMoreIcon/>
                  </div>
                  {openPost?
                   <div className="user">
                   <ul className='sidebarList'>
                     <li className="childSidebarlistItem2">
                       <PhotoSizeSelectActualIcon className='sidebarIcon' />
                       <span className='sidebarListItemText' >Post</span>
                     </li>
                     <li className="childSidebarlistItem2">
                       <ReportIcon className='sidebarIcon' />
                       <span className='sidebarListItemText' >Blocked Post</span>
                     </li>
                   </ul>
               </div>
                  :""}
                 
                </li>
                <li className="sidebarlistItem2">
                <MailIcon className='sidebarIcon' />
                <span className='sidebarListItemText' >inbox</span>
                </li>
                <li className="sidebarlistItem2">
                <LogoutIcon className='sidebarIcon' />
                <span className='sidebarListItemText' >Logout</span>
                </li>
              </ul>
            <hr className='sidebarhr' />
            <br />
        </div>
    </div>
  )
}

export default AdminSidebar