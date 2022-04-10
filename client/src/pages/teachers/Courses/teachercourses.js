import React from 'react';
import {useNavigate} from 'react-router-dom';
import './teachercourses.css'

const teachercourses = () => {
    return (
    <div className = "container">

    <div className ="box-1">
    <h1>Academics Management System </h1>
    </div>
    

    <div className = "heading">
        <h2> You are currently teaching the following courses: </h2> 
    </div>

    <div className = "boxes">
        <div className = "box-2"> 
        <h2> Chemistry S1 </h2>
        </div>

        <div className = "box-2"> 
            <h2> Chemistry S2 </h2>
        </div>
    </div>

</div>
    )
}