import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import Navbar from "../../Navbar Courses/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import axios from "axios";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import './assignments.css'

export default function StudentAssignments() {
    const navigate = useNavigate();
    const {state} = useLocation();

    const toAssignment = (id) => {
        sessionStorage.setItem("assignid", id)
        navigate(`/students/assignment/submit`)
    }

    const fetchedAssignments = state.assignments

    return (
        <div>
            <Navbar></Navbar>
            <Sidebar></Sidebar>

            <div class="col d-flex justify-content-center" id="col17" >
                <div class="card text-center m-2" style={{ 'width': '95%' }}>
                </div>
            </div >

            <br /> <br />

            <div class="col d-flex justify-content-center" id="col18" >
                <div class="card text-center m-2" style={{ 'width': '95%' }}>

                    <div className="Courses display-5 fw-bold" style={{ 'color': 'white', 'backgroundColor': '#0F245A' }}>Assignments</div>

                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col" style={{ 'text-align': 'center' }}>Assignment Title</th>
                                <th scope="col" style={{ 'text-align': 'center' }}>Due</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fetchedAssignments.map((assign, idx) => (
                                <tr key={idx} onClick={() => toAssignment(assign.title)}>
                                    <th scope="row">{idx + 1}</th>
                                    <td>{assign.title}</td> 
                                    <td>{assign.deadline}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}