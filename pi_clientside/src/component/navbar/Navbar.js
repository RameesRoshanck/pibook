import React from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import image from '../../assets/elonmask.jpeg'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbarContainer'>
        <div className="navbarLeft">
               <span className='logo'>pi-book</span>
        </div>
        <div className="navbarCenter">
            <div className="searchbar">
               <SearchIcon className='searchIcon'/>
               <input type="text" placeholder='Search' className='searchInput' />
            </div>
        </div>
        <div className="navbarRight">
            <div className="topbarLinks">
                <span className='topbarLink'>Homepage</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                <PersonIcon/>
                <span className='topbarIconBadge'>1</span>
                </div>
                <div className="topbarIconItem">
                <ChatIcon/>
                <span className='topbarIconBadge'>1</span>
                </div>
                <div className="topbarIconItem">
                <NotificationsNoneIcon/>
                <span className='topbarIconBadge'>1</span>
                </div>
            </div>
            <img src={image} alt="images" className='topbarImage' />
        </div>
    </div>
  )
}

export default Navbar