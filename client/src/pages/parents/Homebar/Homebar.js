import React from 'react'
import './Homebar.css'
import {useNavigate} from 'react-router-dom'
import {Home, People, EventNote, Announcement, Help} from '@material-ui/icons/';
import axios from 'axios';


const Homebar = () => {

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

    return(
        <div className='bar2'>
            <ul className='bar-container2'>
                <li className='item2'>
                    <Home className='icon2'></Home>
                    <a className='click-items2' onClick={goToHome}>Welcome</a>
                </li>
                <li className='item2'>
                    <People className='icon2'></People>
                    <a className='click-items2' onClick={goToStudent}>Students</a>
                </li>
                <li className='item2'>
                    <EventNote className='icon2'></EventNote>
                    <a className='click-items2' onClick={goToMeeting}>Request Meeting</a>
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