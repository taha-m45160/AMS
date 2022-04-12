import React from 'react'
import './quizzes.css'
import {Link, useNavigate} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar Student/SidebarS";

const Quizzes = () => {

    const {state} = useLocation();

    return(
        <body>
    <div> 
        <Navbar></Navbar>
        <Sidebar></Sidebar>

        <div class="chem">
        </div> 
       

        <div class = "box-2">
            <h1>state.items.name</h1> 
        </div>

        <div class = "box-3">
            <h2 class = "inline"> Title </h2>
            <h2 class = "inline"> Marks </h2>
            <h2 class = "inline"> Feedback </h2>
        </div>

        <tbody>
            {state.items.assignment.map((element, index) => {
                <div class = "box-4">
                    <h2 class = "inline">element.title</h2>
                    <h2 class = "inline">element.marks</h2>
                    <h2 class = "inline">element.feedback</h2>
                </div>
            })}
        </tbody>

    </div>
     

</body>
    )
}

export default Quizzes


