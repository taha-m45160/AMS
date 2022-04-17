import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import Navbar from "../../Navbar Courses/Navbar";
import Sidebar from "../../Sidebar/Sidebar"
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
import './Resources.css'

export default function Resources() {
    const navigate = useNavigate();
    const {state} = useLocation();

    const displayResources = () => {
        const fetchedResources = state.resources

        const assignComponents = []

        fetchedResources.map((assign) => {
            assignComponents.push(
                <ListItem disablePadding>
                    <ListItemButton>
                        <a className='me-5' download={assign.name} href="data:image/png;base64,asdasd..."><ListItemText primary={assign.name} />  </a>
                        <ListItemText primary={`${((assign.attachment.length/1000)*6/8).toFixed(2)} KB`}/>
                        <ListItemText primary={assign.date} />
                    </ListItemButton>
                </ListItem>
            )
        })
        return assignComponents
    }

    return (
        <div>
            <Navbar></Navbar>
            <Sidebar></Sidebar>

            <h1 className="titleabc" >Resources</h1>
            <br /> <br />


            <Box className="boxC">
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItemButton style={{'backgroundColor':'#0F245A', 'color':'white'}}>
                            <ListItemText primary='Title' style={{'text-decoration':'underline'}}/>
                            <ListItemText primary='Size' style={{'text-decoration':'underline'}}/>
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