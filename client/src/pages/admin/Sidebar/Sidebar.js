import React from 'react'
import './Sidebar.css'
import {useNavigate} from 'react-router-dom'
import {People, MenuBook, Group, Announcement, Help} from '@material-ui/icons/';

const Sidebar = () => {

    const navigate = useNavigate();

    const goToUsers = (ev) => {
        ev.preventDefault();
        navigate('/admin/users');
    }

    const goToCourses = (ev) => {
        ev.preventDefault();
        navigate('/admin/courses');
    }

    const goToSections = (ev) => {
        ev.preventDefault();
        navigate('/admin/sections');
    }

    const goToAnnouncements = (ev) => {
        ev.preventDefault();
        navigate('/admin/announcements');
    }

    const goToHelp = (ev) => {
        ev.preventDefault();
        navigate('/admin/help');
    }

    return(
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <People className='icon'></People>
                    <a className='click-items' onClick={goToUsers}>Users</a>
                </li>
                <li className='item'>
                    <MenuBook className='icon'></MenuBook>
                    <a className='click-items' onClick={goToCourses}>Courses</a>
                </li>
                <li className='item'>
                    <Group className='icon'></Group>
                    <a className='click-items' onClick={goToSections}>Sections</a>
                </li>
                <li className='item'>
                    <Announcement className='icon'></Announcement>
                    <a className='click-items' onClick={goToAnnouncements}>Announcements</a>
                </li>
                <li className='item'>
                    <Help className='icon'></Help>
                    <a className='click-items' onClick={goToHelp}>Help</a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar