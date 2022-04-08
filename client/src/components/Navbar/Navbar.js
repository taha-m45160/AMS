import React from 'react'
import './Navbar.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar = () => {
    return(
        <div className='nav'>
            <div className='nav-container'>
                <div>
                </div>
                <div className='title'>
                    <h1>Academics Management System</h1>
                </div>
                <div className='account-icon'>
                    <AccountCircleOutlinedIcon style={{ fontSize: "60px", color: "white" }}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar