import React from 'react'
import './Homebar.css'
import {useNavigate} from 'react-router-dom'
import {People, MenuBook, Home, Announcement, Help} from '@material-ui/icons/';
import axios from 'axios';


const Homebar = ({text}) => {

    const navigate = useNavigate();
    axios.defaults.withCredentials = true

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