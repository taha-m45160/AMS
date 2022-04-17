import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu} from './SidebarElements';
import {People, MenuBook, Announcement, Help} from '@material-ui/icons/';
import {useNavigate} from 'react-router-dom'
import './SidebarSlide.css'
import axios from 'axios';

const SideBar = ({ isOpen, toggle }) => {

    const navigate = useNavigate();
    const [errMsg, setErrMsg] = React.useState('')
    axios.defaults.withCredentials = true

    const goToHome = async (ev) => {
        ev.preventDefault();
        navigate('/teacher');
    }

    const goToCourses = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.post('http://localhost:8000/teacher/courses', {withCredentials: true})
            if (res.data.courses.length === 0){
                console.log('here')
                setErrMsg("No course found.")
            }
            else {
                navigate('/teacher/courses', {state: {
                    courses: res.data.courses,
                }})
            }
        }
        catch (err) {
            if(err.response){
                setErrMsg(err.response.statusText)
            }
        }
    }

    const goToAnnouncements = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/teacher/announcements', {withCredentials: true});
            if (res.data.announcements.length === 0){
                setErrMsg("No announcement found.")
            }
            else {
                navigate('/teacher/announcements', {state: {
                    announcements: res.data.announcements,
                }})
            }
        }
        catch (err) {
            if(err.response){
                setErrMsg(err.response.statusText)
            }
        }
    }

    const goToHelp = async (ev) => {
        ev.preventDefault();
        navigate('/teacher/help');
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
