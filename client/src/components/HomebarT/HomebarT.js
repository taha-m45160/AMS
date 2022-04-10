import React from 'react'
import './HomebarT.css'
import Welcome from '../../images/Welcome.png'
import Courses from '../../images/Current Courses.png'
import Announcements from '../../images/Announcements.png'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';


const Homebar = () => {

    const navigate = useNavigate();
    const [errMsg, setErrMsg] = React.useState('')

    const viewCourses = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/', {withCredentials: true});
            if(res.data.courses.length === 0){
                setErrMsg("No course");
            }
            else{
                navigate('/student/courses', {state: {
                    courses: res.data.courses,
                    userType: "teacher"
                }})
            }
        }
        catch(err){
            if(err.response){
                setErrMsg(err.response.statusText)
            }
        }
    }

    const viewAnnouncemnets = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/', {withCredentials: true});
            if(res.data.announcements.length === 0){
                setErrMsg("No announcements");
            }
            else{
                navigate('/student/announcements', {state: {
                    announcements: res.data.announcements,
                    userType: "teacher"
                }})
            }
        }
        catch(err){
            if(err.response){
                setErrMsg(err.response.statusText)
            }
        }
    }

    const welcomeBack = (ev) => {
        ev.preventDefault();
        navigate('/teacher')
    }

    return (
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <img src={Welcome} alt="Welcome"/>
                    <button className='click-items' onClick={welcomeBack}>Welcome</button>
                </li>
                
                <li className='item'>
                    <img src={Courses} alt="Courses"/>
                    <button className='click-items' onClick={viewCourses}>Courses</button>
                </li>
                
                <li className='item'>
                    <img src={Announcements} alt="Announcements"/>
                    <button className='click-items' onClick={viewAnnouncemnets}>Announcements</button>
                </li>
            </ul>
        </div>
    )
}

export default Homebar