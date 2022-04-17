import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import './studentsEnrolled.css'

const studentsEnrolled = () => {
    const {state} = useLocation();
    const goToCourses = () => {
        console.log('Go to courses')
    }
    return (

    <div className = "container">

    <div className="box-1">
    <h1>Academics Management System </h1>
    </div>
    

    <div className = "heading">
        <h2> Please choose from the following students enrolled: </h2> 
    </div>

    <div className = "boxes">
        <div className = "box-2"> 
        <h2> {state.name} </h2>
        </div>
        {state.courses.map((ele, idx)=> (
                    <div className = "box-2"> 
                        <h2 onClick={goToCourses}> </h2>
                    </div>
                ))}

    </div>

</div>
    )
}
