import React from 'react'
import Feed from '../component/Feeds/Feed'
import Navbar from '../component/navbar/Navbar'
import Rightbar from '../component/Rightbar/Rightbar'
import Sidebar from '../component/Sidebar/Sidebar'
import './homepage.css'

function 
home() {
  return (
    <div>
        <Navbar/>
        <div className="homecontainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
        </div>
    </div>
  )
}

export default 
home