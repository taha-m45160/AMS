import React from 'react'
import './assignments.css'
import {Link, useNavigate} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar Student/SidebarS";

const Assignment = () => {

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
            <h2 class = "inline"> Due Data </h2>
            <h2 class = "inline"> Status </h2>
        </div>

        <tbody>
            {state.items.assignment.map((element, index) => {
                <div class = "box-4">
                    <h2 class = "inline">element.name</h2>
                    <h2 class = "inline">element.dueDate</h2>
                    <h2 class = "inline">element.status</h2>
                </div>
            })}
        </tbody>

    </div>
     

</body>
    )
}

export default Assignment


