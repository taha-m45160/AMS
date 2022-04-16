import React from 'react'
// import './Navbar.css'
import {useNavigate} from 'react-router-dom'
import {Person} from '@material-ui/icons/';

const Navbar = () => {
    const navigate = useNavigate();

    const logout = (ev) => {
        ev.preventDefault();
        navigate('/logout');
    }
    const goToAccountDetails = (ev) => {
        ev.preventDefault();
        navigate('/accountDetails');
    }

    return(
        <div className='nav'>
            <div className='nav-container'>
            <img className='AMS-icon' src={require('../../images/AMS.png')}></img>
            <div className="dropdown me-4">
                <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                    <div className='account-icon'>
                        <Person style={{ fontSize: "60px", color: "white" }}/>
                    </div>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item m-3" onClick={goToAccountDetails}>Account details</a></li>
                    <li><a className="dropdown-item m-3" onClick={logout}> <span> Logout </span></a></li>
                </ul>
            </div>
            </div>
        </div>
        
    )
}

export default Navbar