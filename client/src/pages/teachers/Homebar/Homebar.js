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
        navigate('/teacher');
    }

    const goToCourses = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/teacher/courses', {withCredentials: true});
            if (res.data.courses.length === 0){
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

    const goToGradebook = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/teacher/gradebook', {withCredentials: true});
            if (res.data.gradebook.length === 0){
                setErrMsg("No gradebook found.")
            }
            else {
                navigate('/teacher/gradebook', {state: {
                    gradebook: res.data.gradebook,
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