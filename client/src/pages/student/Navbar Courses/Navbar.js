import React from 'react'
import './Navbar.css'
import {useNavigate} from 'react-router-dom'
import {Person} from '@material-ui/icons/';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SidebarSlide from './SidebarSlide';
import { useState } from 'react';
import axios from 'axios'

const Navbar = () => {
    const navigate = useNavigate();
    axios.defaults.withCredentials = true
    const logout = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('https://academic-management-system.herokuapp.com/logout')
            navigate('/');
        } catch(err) {
            console.log(err)
            navigate('/')
        }
    }
    const goToAccountDetails = async (ev) => {
        ev.preventDefault();
        const res = await axios.get("https://academic-management-system.herokuapp.com/whoami")
        navigate('/admin/changePassword', {state:{
            heading: 'Account Details',
            user: res.data.user
        }})
    }
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div>
            <SidebarSlide isOpen={isOpen} toggle={toggle}></SidebarSlide>
            <div className='nav'>
                <div className='nav-container'>
                <img className='AMS-icon' src={require('../../../images/AMS.png')}></img>
                <div className='siderbar-slider'>
                    <FormatListBulletedIcon style={{color: "white", fontSize: "60px", cursor: "pointer" }} onClick={toggle}></FormatListBulletedIcon>
                </div>
                <div class="dropdown me-4">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                        <div className='account-icon'>
                            <Person style={{ fontSize: "60px", color: "white" }}/>
                        </div>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item m-3" onClick={goToAccountDetails}>Account details</a></li>
                        <li><a class="dropdown-item m-3" onClick={logout}> <span> Logout </span></a></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar