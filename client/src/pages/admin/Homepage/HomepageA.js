import React from 'react'
import './HomepageA.css'
import Navbar from '../../../components/Navbar/Navbar'
import Homebar from '../../../components/HomebarA/HomebarA'
import Sidebar from '../../../components/Sidebar Teacher/SidebarT'
import SidebarT from '../../../components/Sidebar Teacher/SidebarT'

const HomepageA = () => {
    return (
        <div className='home-container'>
            <Navbar></Navbar>
            {/* <Homebar></Homebar> */}
            <SidebarT></SidebarT>
            <div className='text'>
                <h2>Welcome to AMS! Where managing your academics just got a lot easier!</h2>
            </div>
            <div className='logo'>
                <img src={require('../../../images/AMS.png')} />
            </div>
            <div className='text-tutorial'>
            <h2>Need help? Click<a href="YOUTUBE">here</a> to watch AMS tutorial.</h2>
            </div>
        </div>
    )
}

export default HomepageA