import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Homebar/Homebar";
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

export default function Assignments() {
    const navigate = useNavigate();

    const toAssignment = (id) => {
        sessionStorage.setItem("assignid", id)
        navigate(`/student/courses/assignments/assignment`)
    }

    const fetchedAssignments = [
        { title: 'Assignment 1', deadline: '19th April' },
        { title: 'Assignment 2', deadline: '17th April' },
        { title: 'Assignment 3', deadline: '20th April' },
        { title: 'Assignment 4', deadline: '25th April' },
        { title: 'Assignment 5', deadline: '29th April' },
    ]

    return (
        <div>
            <Navbar></Navbar>
            <Sidebar></Sidebar>

            <div class="col d-flex justify-content-center" style={{ 'marginLeft': '25%' }}>
                <div class="card text-center m-2" style={{ 'width': '95%' }}>
                </div>
            </div >

            <br /> <br />

            <div class="col d-flex justify-content-center" style={{ 'marginLeft': '25%', 'border-radius': '15px' }}>
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