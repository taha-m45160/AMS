import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu} from './SidebarElements';
import {People, MenuBook, Announcement, Help} from '@material-ui/icons/';
import {useNavigate} from 'react-router-dom'
import './SidebarSlide.css'
import axios from 'axios';

const SideBar = ({ isOpen, toggle }) => {

    const navigate = useNavigate();
    axios.defaults.withCredentials = true

    const goToHome = async (ev) => {
        ev.preventDefault()
        const res1 = await axios.get('https://academic-management-system.herokuapp.com/whoami')
        const res2 = await axios.get('https://academic-management-system.herokuapp.com/getAnnouncements')
        navigate(`/student/`, {state:{
            name: res1.data.user.name.first,
            announcements: res2.data.announcements
        }})
    }

    const goToCourses = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('https://academic-management-system.herokuapp.com/students/courses');
            navigate('/student/courses', {state: {
                courses: res.data.courses
            }})
        }
        catch (err) {
            console.log(err)
        }
    }

    const goToAnnouncements = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('https://academic-management-system.herokuapp.com/getAnnouncements', {withCredentials: true});
            navigate('/student/announcements', {state: {
                announcements: res.data.announcements,
            }})
        }
        catch (err) {
            console.log(err)
        }
    }

    const goToHelp = async (ev) => {
        ev.preventDefault();
        navigate('/student/help');
    }

    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <ul className='bar-container1'>
                        <li className='item1'>
                            <People className='icon1'></People>
                            <a className='click-items1' onClick={goToHome} style={{color:"white"}}>Welcome</a>
                        </li>
                        <li className='item1'>
                            <MenuBook className='icon1'></MenuBook>
                            <a className='click-items1' onClick={goToCourses} style={{color:"white"}}>Courses</a>
                        </li>
                        <li className='item1'>
                            <Announcement className='icon1'></Announcement>
                            <a className='click-items1' onClick={goToAnnouncements} style={{color:"white"}}>Announcements</a>
                        </li>
                        <li className='item1'>
                            <Help className='icon1'></Help>
                            <a className='click-items1' onClick={goToHelp} style={{color:"white"}}>Help</a>
                        </li>
                    </ul>
                </SidebarMenu>
            </SidebarWrapper>
        </SideBarContainer>
    );
};

export default SideBar;
