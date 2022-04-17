import React from 'react'
import './Homebar.css'
import {useNavigate} from 'react-router-dom'
import {Home, MenuBook, Announcement, Book, Help} from '@material-ui/icons/';
import axios from 'axios';


const Homebar = () => {
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

    return(
        <div className='bar2'>
            <ul className='bar-container2'>
                <li className='item2'>
                    <Home className='icon2'></Home>
                    <a className='click-items2' onClick={goToHome}>Home</a>
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