import React from 'react'
import './HomebarP.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const Homebar = () => {

    const navigate = useNavigate();
    const [errMsg, setErrMsg] = React.useState('')

    const viewAnnouncemnets = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/', {withCredentials: true});
            if(res.data.announcements.length === 0){
                setErrMsg("No announcements");
            }
            else{
                navigate('/parents/announcements', {state: {
                    announcements: res.data.announcements,
                    userType: "parent"
                }})
            }
        }
        catch(err){
            if(err.response){
                setErrMsg(err.response.statusText)
            }
        }
    }

    const viewGradebook = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/', {withCredentials: true});
            if(res.data.announcements.length === 0){
                setErrMsg("Gradebook empty");
            }
            else{
                navigate('/parents/gradebook', {state: {
                    announcements: res.data.announcements,
                    userType: "parent"
                }})
            }
        }
        catch(err){
            if(err.response){
                setErrMsg(err.response.statusText)
            }
        }
    }

    const reqMeeting = (ev) => {
        ev.preventDefault();
        navigate('/parents/request-meeting')
    }

    return (
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <img src={require('../../images/Announcements.png')} width="50px"/>
                    <button className='navi' onClick={viewAnnouncemnets}>Announcements</button>
                </li>
                <li className='item'>
                <img src={require('../../images/Gradebook.png')} width="50px"/>
                    <button className='navi' onClick={viewGradebook}>Gradebook</button>
                </li>
                <li className='item'>
                <img src={require('../../images/Request Meeting.png')} width="50px"/>
                    <button className='navi' onClick={reqMeeting} >Request Meeting</button>
                </li>
            </ul>
        </div>
    )
}

export default Homebar