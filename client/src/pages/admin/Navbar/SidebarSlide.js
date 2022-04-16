import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu} from './SidebarElements';
import {People, MenuBook, Group, Announcement, Help} from '@material-ui/icons/';
import {useNavigate} from 'react-router-dom'
import './SidebarSlide.css'

const SideBar = ({ isOpen, toggle }) => {

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


    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <ul className='bar-container'>
                    <li className='item1'>
                        <People className='icon'></People>
                        <a className='click-items1' onClick={goToUsers} style={{"color":"white"}}>Users</a>
                    </li>
                    <li className='item1'>
                        <MenuBook className='icon'></MenuBook>
                        <a className='click-items1' onClick={goToCourses} style={{"color":"white"}}>Courses</a>
                    </li>
                    <li className='item1'>
                        <Group className='icon'></Group>
                        <a className='click-items1' onClick={goToSections} style={{"color":"white"}}>Sections</a>
                    </li>
                    <li className='item1'>
                        <Announcement className='icon'></Announcement>
                        <a className='click-items1' onClick={goToAnnouncements} style={{"color":"white"}}>Announcements</a>
                    </li>
                    <li className='item1'>
                        <Help className='icon'></Help>
                        <a className='click-items1' onClick={goToHelp} style={{"color":"white"}}>Help</a>
                    </li>
                </ul>
                </SidebarMenu>
            </SidebarWrapper>
        </SideBarContainer>
    );
};

export default SideBar;
