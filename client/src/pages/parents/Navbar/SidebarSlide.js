import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu} from './SidebarElements';
import {Home, People, EventNote, Announcement, Help} from '@material-ui/icons/';
import {useNavigate} from 'react-router-dom'
import './SidebarSlide.css'
import axios from 'axios';

const SideBar = ({ isOpen, toggle }) => {

    const navigate = useNavigate();
    const [errMsg, setErrMsg] = React.useState('')
    axios.defaults.withCredentials = true

    const goToHome = async (ev) => {
        ev.preventDefault();
        navigate('/parent');
    }

    const goToStudent = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('https://academic-management-system.herokuapp.com/parent/students', {withCredentials: true});
            if (res.data.students.length === 0){
                setErrMsg("No course found.")
            }
            else {
                navigate('/parent/students', {state: {
                    students: res.data.students,
                }})
            }
        }
        catch (err) {
            if(err.response){
                setErrMsg(err.response.statusText)
            }
        }
    }

    const goToMeeting = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('https://academic-management-system.herokuapp.com/parent/meeting', {withCredentials: true});
            if (res.data.meeting.length === 0){
                setErrMsg("No announcement found.")
            }
            else {
                navigate('/parent/meeting', {state: {
                    meeting: res.data.meeting,
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
            const res = await axios.get('https://academic-management-system.herokuapp.com/parent/announcements', {withCredentials: true});
            if (res.data.announcements.length === 0){
                setErrMsg("No announcement found.")
            }
            else {
                navigate('/parent/announcements', {state: {
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
        navigate('/parent/help');
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
                        <Home className='icon1'></Home>
                        <a className='click-items1' onClick={goToHome}>Welcome</a>
                    </li>
                    <li className='item1'>
                        <People className='icon1'></People>
                        <a className='click-items1' onClick={goToStudent}>Students</a>
                    </li>
                    <li className='item1'>
                        <EventNote className='icon1'></EventNote>
                        <a className='click-items1' onClick={goToMeeting}>Request Meeting</a>
                    </li>
                    <li className='item1'>
                        <Announcement className='icon1'></Announcement>
                        <a className='click-items1' onClick={goToAnnouncements}>Announcements</a>
                    </li>
                    <li className='item1'>
                        <Help className='icon1'></Help>
                        <a className='click-items1' onClick={goToHelp}>Help</a>
                    </li>
                </ul>
                </SidebarMenu>
            </SidebarWrapper>
        </SideBarContainer>
    );
};

export default SideBar;
