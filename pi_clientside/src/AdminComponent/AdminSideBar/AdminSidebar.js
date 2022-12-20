import React from 'react'
import './adminSideBar.css'
import GroupIcon from '@mui/icons-material/Group';
import TvIcon from '@mui/icons-material/Tv';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import StarsIcon from '@mui/icons-material/Stars';
import GroupsIcon from '@mui/icons-material/Groups';
import MessageIcon from '@mui/icons-material/Message';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';

function AdminSidebar() {
  return (
    <div className='sideBar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarlistItem">
                {/* <img src={image} alt="images" className='personelImage sidebarIcon' /> */}
                <span className='sidebarListItemText' >Mohamed Ramees Roshan ck</span>
                </li>
                <li className="sidebarlistItem">
                <GroupIcon className='sidebarIcon' />
                <span className='sidebarListItemText' >Friens</span>
                </li>
                <li className="sidebarlistItem">
                <TvIcon className='sidebarIcon' />
                <span className='sidebarListItemText' >watch</span>
                </li>
                <li className="sidebarlistItem">
                <WorkHistoryIcon className='sidebarIcon' />
                <span className='sidebarListItemText' >Most recent</span>
                </li>
                <li className="sidebarlistItem">
                <StarsIcon className='sidebarIcon' />
                <span className='sidebarListItemText' >favorite</span>
                </li>
                <li className="sidebarlistItem">
                <GroupsIcon className='sidebarIcon' />
                <span className='sidebarListItemText' >Group</span>
                </li>
                <li className="sidebarlistItem">
                <MessageIcon className='sidebarIcon' />
                <span className='sidebarListItemText' >favorite</span>
                </li>
                <li className="sidebarlistItem">
                <FlagCircleIcon className='sidebarIcon' />
                <span className='sidebarListItemText' >pages</span>
                </li>
            </ul>
            <hr className='sidebarhr' />
            <br />
            <ul className="sidebarFriendlist">
              <li className="sidebarFriend">
                {/* <img src={image} alt="img" className="sidebarFriendImage" /> */}
                <span className="sidebarFriendName">Roshan ck</span>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default AdminSidebar