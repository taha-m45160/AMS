import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import './Gradebook.css'

const Gradebook = () => {
    const {state} = useLocation();
    const viewFeedback = () => {
        console.log('view feedback')
    }
    return (
        <div className = "container"> 


            <div clasName ="box-1">
            <h1>Academics Management System </h1>
            </div>
            

            <div className ="chem">
            </div> 

            <div className = "box-2">
                <h1>{state.subject}</h1> 
            </div>

            <div className = "text"> 
                <h2> Gradebook </h2>
            </div>

            <div className = "box-3">
                <h2 className = "inline"> Title </h2>
                <h2 className = "inline"> Marks </h2>
                <h2 className = "inline"> Feedback </h2>
            </div>

            {state.grades.map((ele, idx) => (
                <div className = "box-4">
                    <h2 className = "inline"> {ele.component} </h2>
                    <h2 className = "inline"> {ele.marks} </h2>
                    <h2 className = "inline" onClick={viewFeedback}> <u> View Feedback </u></h2>
                </div>
            ))}
        </div>
    );
}

export default Gradebook;