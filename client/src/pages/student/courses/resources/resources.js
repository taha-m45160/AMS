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

export default function Resources() {
    const navigate = useNavigate();

    const downloadFile = (attach) => {
        console.log('yes')
    }



    const displayResources = () => {
        // try {
        //     const enrolledCourses = await axios.get('http://localhost:8000/student/courses')
        // } catch (err) {
        //     console.log(err)
        // }    

        const fetchedResources = [
            { name: 'haskell.pdf', section: '1', date: '19th April', attachment: '1.pdf' },
            { name: 'haskell2.pdf', section: '12', date: '19th April', attachment: '2.pdf' },
            { name: 'haskell3.pdf', section: '13', date: '19th April', attachment: '3.pdf' },
            { name: 'haskell4.pdf', section: '4', date: '19th April', attachment: '4.pdf' },
            { name: 'haskell5.pdf', section: '5', date: '19th April', attachment: '6.pdf' },
        ]

        const assignComponents = []

        fetchedResources.map((assign) => {
            assignComponents.push(
                <ListItem disablePadding>
                    <ListItemButton onClick={(ev) => downloadFile(assign.attachment)}>
                        <ListItemText primary={assign.name} />
                        <ListItemText primary={assign.section} />
                        <ListItemText primary={assign.date} />
                    </ListItemButton>
                </ListItem>
            )
        })

        return assignComponents
    }

    const fetchedResources = [
        { name: 'haskell.pdf', section: '1', date: '19th April', attachment: '1.pdf' },
        { name: 'haskell2.pdf', section: '12', date: '19th April', attachment: '2.pdf' },
        { name: 'haskell3.pdf', section: '13', date: '19th April', attachment: '3.pdf' },
        { name: 'haskell4.pdf', section: '4', date: '19th April', attachment: '4.pdf' },
        { name: 'haskell5.pdf', section: '5', date: '19th April', attachment: '6.pdf' },
    ]

    return (
        <div>
            <Navbar></Navbar>
            <Sidebar></Sidebar>

            <h1 className="title" style={{ 'margin-top': '2%', 'margin-left': '25%', 'text-align': 'center' }}>Resources</h1>

            {/* <div class="col d-flex justify-content-center" style={{ 'marginLeft': '25%' }}>
                <div class="card text-center m-2" style={{ 'width': '95%' }}>
                </div>
            </div > */}
            <br /> <br />


            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginLeft: '50%', marginTop: '5%', border: 1, borderRadius: '10px', transform: 'scale(1.8)'}}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItemButton>
                            <ListItemText primary='Title' style={{'text-decoration':'underline'}}/>
                            <ListItemText primary='Section' style={{'text-decoration':'underline'}}/>
                            <ListItemText primary='Date' style={{'text-decoration':'underline'}}/>
                        </ListItemButton>

                        {
                            displayResources().map((assign) => {
                                return assign
                            })
                        }
                    </List>
                </nav>
            </Box>

        </div >
    )
}