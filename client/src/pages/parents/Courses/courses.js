import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import './parentscourses.css'

const parentscourses = () => {
    const {state} = useLocation();
    const goToHome = () => {
        console.log('Go to home')
    }
    return (
        <div className = "container">

            <div className="box-1">
                <h1>Academics Management System </h1>
            </div>
            

            <div className = "heading">
                <h2> Your child is graded in the following courses: </h2> 
            </div>

            <div className = "boxes">
                <div className = "box-2"> 
                    <h2> {state.subject} </h2>
                </div>
                {state.courses.map((ele, idx)=> (
                    <div className = "box-3"> 
                        <h2 onClick={goToHome}> Islamiat </h2>
                    </div>
                ))}
            </div>

        </div>
    )
}

