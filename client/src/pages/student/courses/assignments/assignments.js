import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Homebar/Homebar";
import axios from "axios";

export default function Assignments() {

    // const {state} = useLocation();
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    // const [courses, setCourses] = React.useState(state.courses)

    const goToSections = (ev) => {
        // navigate('/admin/sections', {state:{
        //   sections: res.data.sections
        // }})
    }


    let assignments = [{ "ID": "1", "title": "Assignment 1", "publishedDate": "24/10/2021", "deadline": "24/10/2021" }]

    return (
        <div>
            <Navbar></Navbar>
            <Sidebar></Sidebar>

            {/* <div class="col d-flex justify-content-center" style={{'marginLeft':'25%'}}>
            <div class="card text-center m-2" style={{'width':'95%'}}>
            </div>
        </div >
        <br /> <br /> */}
            <div class="col d-flex justify-content-center" style={{'marginLeft':'25%'}}>
            <div class="card text-center m-2" style={{'width':'95%'}}>
                <div className="Courses display-5 fw-bold" style={{'color': 'white', 'backgroundColor':'#0F245A'}}>
                    Assignments
                </div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col" style={{'text-align':'center'}}>Title</th>
                        <th scope="col" style={{'text-align':'center'}}>Published On</th>
                        <th scope="col" style={{'text-align':'center'}}>Deadline</th>
                        <th scope="col" style={{'text-align':'center'}}>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                    {assignments.map((assign, idx)=> (
                        <tr key={idx}>
                        <th scope="row">{idx + 1}</th>
                        <td>{assign.title}</td>
                        <td>{assign.publishedDate}</td>
                        <td>{assign.deadline}</td>
                        <td><u className = "courseToSection text-primary" onClick={goToSections}>View Feedback</u></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}