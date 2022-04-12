import React from 'react'
import './SidebarS.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const SidebarS = () => {

    const navigate = useNavigate();
    const [errMsg, setErrMsg] = React.useState('')

    const viewOutline = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/', {withCredentials: true});
            if(res.data.outline.length === 0){
                setErrMsg("No outline");
            }
            else{
                navigate('/student/outline', {state: {
                    outline: res.data.resources,
                    userType: "student"
                }})
            }
        }
        catch(err){
            if(err.response){
                setErrMsg(err.response.statusText)
            }
        }
    }

    const viewResources = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/', {withCredentials: true});
            if(res.data.resources.length === 0){
                setErrMsg("No resources");
            }
            else{
                navigate('/student/resources', {state: {
                    resources: res.data.resources,
                    userType: "student"
                }})
            }
        }
        catch(err){
            if(err.response){
                setErrMsg(err.response.statusText)
            }
        }
    }

    const viewQUizzes = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/', {withCredentials: true});
            if(res.data.quizzes.length === 0){
                setErrMsg("No quizzes");
            }
            else{
                navigate('/teacher/quizzes', {state: {
                    quizzes: res.data.quizzes,
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

    const viewAssignments = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/', {withCredentials: true});
            if(res.data.assignments.length === 0){
                setErrMsg("No assignments");
            }
            else{
                navigate('/student/assignments', {state: {
                    assignments: res.data.assignments,
                    userType: "student"
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
            if(res.data.gradebook.length === 0){
                setErrMsg("No gradebook");
            }
            else{
                navigate('/student/gradebook', {state: {
                    gradebook: res.data.gradebook,
                    userType: "student"
                }})
            }
        }
        catch(err){
            if(err.response){
                setErrMsg(err.response.statusText)
            }
        }
    }

    return (
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <img src={require('../../images/Resources.png')}/>
                    <button className='click-items' onClick={viewOutline}>Outline</button>
                </li>
                <li className='item'>
                <img src={require('../../images/Resources.png')}/>
                    <button className='click-items' onClick={viewResources}>Resources</button>
                </li>
                <li className='item'>
                <img src={require('../../images/Quizzes.png')}/>
                    <button className='click-items' onClick={viewQUizzes}>Quizzes</button>
                </li>
                <li className='item'>
                    <img src={require('../../images/Assignments.png')}/>
                    <button className='click-items' onClick={viewAssignments}>Assignments</button>
                </li>
                <li className='item'>
                    <img src={require('../../images/Gradebook.png')}/>
                    <button className='click-items' onClick={viewGradebook}>Gradebook</button>
                </li>
            </ul>
        </div>
    )
}

export default SidebarS