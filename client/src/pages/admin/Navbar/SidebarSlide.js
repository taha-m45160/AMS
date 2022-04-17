import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu} from './SidebarElements';
import {People, MenuBook, Home, Announcement, Help} from '@material-ui/icons/';
import {useNavigate} from 'react-router-dom'
import './SidebarSlide.css'
import axios from 'axios'

const SideBar = ({ isOpen, toggle }) => {

    const navigate = useNavigate();

    const goToUsers = async (ev) => {
        ev.preventDefault();
        try{
            const res1 = await axios.get('https://academic-management-system.herokuapp.com/admin/getStudents')
            const res2 = await axios.get('https://academic-management-system.herokuapp.com/admin/getTeachers')
            const res3 = await axios.get('https://academic-management-system.herokuapp.com/admin/getParents')
            const res4 = await axios.get('https://academic-management-system.herokuapp.com/admin/getAdmins')

            navigate('/admin/users', {state: {
                students: res1.data.users,
                teachers: res2.data.users,
                parents: res3.data.users,
                admins: res4.data.users
            }});
        } catch(err) {
            console.log(err)
        }
    }

    const goToCourses = async (ev) => {
        ev.preventDefault();
        const res = await axios.get('https://academic-management-system.herokuapp.com/admin/courses')
        navigate('/admin/courses', {state: {
            courses: res.data.courses
        }})
    }

    const goToAnnouncements = async (ev) => {
        ev.preventDefault();
        const res = await axios.get('https://academic-management-system.herokuapp.com/getAnnouncements')
        navigate('/admin/announcements', {state: {
            announcements: res.data.announcements
        }});
    }

    const goToHelp = async (ev) => {
        ev.preventDefault();
        navigate('/admin/help');
    }

    // const goToCalendar = async (ev) => {
    //     ev.preventDefault();
    //     navigate('student/calendar')
    // }


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
