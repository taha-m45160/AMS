import React from 'react'
import './SidebarT.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const SidebarT = () => {

    const navigate = useNavigate();
    const [errMsg, setErrMsg] = React.useState('')

    const viewResources = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/', {withCredentials: true});
            if(res.data.resources.length === 0){
                setErrMsg("No resources");
            }
            else{
                navigate('/teacher/resources', {state: {
                    resources: res.data.resources,
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

    const viewQuizzes = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/', {withCredentials: true});
            if(res.data.quizzes.length === 0){
                setErrMsg("No quiz");
            }
            else{
                navigate('/teacher/quizzes', {state: {
                    quizzes: res.data.quizzes,
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

    const viewAssignments = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/', {withCredentials: true});
            if(res.data.assignments.length === 0){
                setErrMsg("No assignments");
            }
            else{
                navigate('/teacher/assignments', {state: {
                    assignments: res.data.assignments,
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

    const viewGradebook = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/', {withCredentials: true});
            if(res.data.gradebook.length === 0){
                setErrMsg("No gradebook");
            }
            else{
                navigate('/teacher/gradebook', {state: {
                    gradebook: res.data.gradebook,
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

    const viewFeedback = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('http://localhost:8000/', {withCredentials: true});
            if(res.data.feedback.length === 0){
                setErrMsg("No feedback");
            }
            else{
                navigate('/teacher/feedback', {state: {
                    feedback: res.data.feedback,
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

    return (
        <div className='bar'>
            <ul className='bar-container'>
                <li className='item'>
                    <img src={require('../../images/Resources.png')} width="50px"/>
                    <button className='click-items' onClick={viewResources}>Resources</button>
                </li>
                <li className='item'>
                <img src={require('../../images/Quizzes.png')} width="50px"/>
                    <button  className='click-items' onClick={viewQuizzes}>Quizzes</button>
                </li>
                <li className='item'>
                <img src={require('../../images/Assignments.png')} width="50px"/>
                    <button className='click-items' onClick={viewAssignments}>Assignments</button>
                </li>
                <li className='item'>
                <img src={require('../../images/Gradebook.png')} width="50px"/>
                    <button className='click-items' onClick={viewGradebook}>Gradebook</button>
                </li>
                <li className='item'>
                <img src={require('../../images/Feedback.png')} width="50px"/>
                    <button className='click-items' onClick={viewFeedback}>Feedback</button>
                </li>
            </ul>
        </div>
    )
}

export default SidebarT