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

    const displayAssignments = () => {
        // try {
        //     const enrolledCourses = await axios.get('http://localhost:8000/student/courses')
        // } catch (err) {
        //     console.log(err)
        // }

        const fetchedAssignments = [
            { title: 'Assignment 1', deadline: '19th April' },
            { title: 'Assignment 2', deadline: '17th April' },
            { title: 'Assignment 3', deadline: '20th April' },
            { title: 'Assignment 4', deadline: '25th April' },
            { title: 'Assignment 5', deadline: '29th April' },
        ]

        const assignComponents = []

        fetchedAssignments.map((assign) => {
            assignComponents.push(
                <ListItem disablePadding>
                    <ListItemButton sx={{}} onClick={() => toAssignment(assign.title)}>
                        <ListItemText primary={assign.title} />
                        <ListItemText primary={assign.deadline} />
                    </ListItemButton>
                </ListItem>
            )
        })

        return assignComponents
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

            {/* <h2 className="title" style={{ 'margin-left': '25%', 'text-align': 'center' }}>Assignments</h2> */}

            {/* <div class="col d-flex justify-content-center" style={{ 'marginLeft': '25%' }}>
                <div class="card text-center m-2" style={{ 'width': '95%' }}>
                </div>
            </div > */}
            <br /> <br />


            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginLeft: '50%', marginTop: '2%', border: 1, borderRadius: '15px'}}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton sx={{}}>
                                    <ListItemText primary='Title' />
                                    <ListItemText primary='Deadline' />
                                </ListItemButton>
                            </ListItem>
                            {
                                displayAssignments().map((assign) => {
                                    return assign
                                })
                            }
                        </List>
                    </nav>
                </Box>

        </div >
    )
}