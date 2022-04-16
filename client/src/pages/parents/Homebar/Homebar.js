import React from 'react'
import './Homebar.css'
import {useNavigate} from 'react-router-dom'
import {People, MenuBook, Announcement, Book, Help} from '@material-ui/icons/';
import axios from 'axios';


const Homebar = () => {

    const navigate = useNavigate();
    const [errMsg, setErrMsg] = React.useState('')
    axios.defaults.withCredentials = true

    const goToHome = async (ev) => {
        ev.preventDefault();
        navigate('/student');
    }

    const goToCourses = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/student/courses', {withCredentials: true});
            if (res.data.courses.length === 0){
                setErrMsg("No course found.")
            }
            else {
                navigate('/student/courses', {state: {
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
            const res = await axios.get('http://localhost:8000/student/announcements', {withCredentials: true});
            if (res.data.announcements.length === 0){
                setErrMsg("No announcement found.")
            }
            else {
                navigate('/student/announcements', {state: {
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
        navigate('/student/help');
    }

    return(
        <div className='bar2'>
            <ul className='bar-container2'>
                <li className='item2'>
                    <People className='icon2'></People>
                    <a className='click-items2' onClick={goToHome}>Welcome</a>
                </li>
                <li className='item2'>
                    <MenuBook className='icon2'></MenuBook>
                    <a className='click-items2' onClick={goToCourses}>Courses</a>
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