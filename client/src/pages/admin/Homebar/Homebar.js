import React from 'react'
import './Homebar.css'
import {useNavigate} from 'react-router-dom'
import {People, MenuBook, Group, Announcement, Help} from '@material-ui/icons/';

const Homebar = () => {

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
        <div className='bar2'>
            <ul className='bar-container2'>
                <li className='item2'>
                    <People className='icon2'></People>
                    <a className='click-items2' onClick={goToUsers}>Users</a>
                </li>
                <li className='item2'>
                    <MenuBook className='icon2'></MenuBook>
                    <a className='click-items2' onClick={goToCourses}>Courses</a>
                </li>
                <li className='item2'>
                    <Group className='icon2'></Group>
                    <a className='click-items2' onClick={goToSections}>Sections</a>
                </li>
                <li className='item2'>
                    <Announcement className='icon2'></Announcement>
                    <a className='click-items2' onClick={goToAnnouncements}>Announcements</a>
                </li>
                <li className='item2'>
                    <Help className='icon2'></Help>
                    <a className='click-items2' onClick={goToHelp}>Help</a>
                </li>
            </ul>
        </div>
    )
}

export default Homebar