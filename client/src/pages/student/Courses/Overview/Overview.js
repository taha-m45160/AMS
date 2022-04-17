import "./Overview.css";
import axios from "axios";
import { Link, useLocation } from 'react-router-dom';
import Navbar from "../../Navbar Courses/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function StudentCourseOverview() {
    const ccode = sessionStorage.getItem("course")
    axios.defaults.withCredentials = true;
    const {state} = useLocation()

    const getTitle = () => {
        return (
            <h1 style={{'color':'white'}}>
                {state.data.title}
            </h1>
        );
    }

    const getDesc = () => {
        return (
            <div className="desc">
                {state.data.overview}
            </div>
        );
    }

    const getInstr = () => {
        
        return (
            <div className="instructor">
                {state.data.instr}
            </div>
        );  
    }

    const getGradeBreakup = () => {

        return (
            <div className="gb">
                {state.data.gradeBreakUp}
            </div>
        );
    }

    const displayOverview = () => {
        return (
            <div className="course-info">
                <Card className="card1">
                    <Typography gutterBottom variant="h1" component="div" style={{ 'text-align': 'center', 'font-size':'25px', 'background-color':'#0F245A', 'padding':'1%'}}>
                        {getTitle()}
                    </Typography>

                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {getInstr()}
                        </Typography>
                        <hr></hr>
                        <Typography variant="body1" color="text.secondary">
                            {getDesc()}
                        </Typography>
                        <hr></hr>
                        <Typography variant="body1" color="text.primary">
                            {getGradeBreakup()}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="course-overview">
            <Navbar />
            <Sidebar />

            <div>
                {displayOverview()}
            </div>
        </div>
    );
}