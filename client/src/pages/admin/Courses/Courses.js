import "./Courses.css";
import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import React from 'react'
import Homebar from '../Homebar/Homebar'


export default function Courses() {
    const {state} = useLocation();
    const navigate = useNavigate();
    axios.defaults.withCredentials = true; 

    const [courses, setCourses] = React.useState(state.courses)

    const goToSections = (ev) => {
      ev.preventDefault();
      
      navigate('/admin/sections', {state:{
        sections: res.data.sections
      }})
    }

    const formik = useFormik({
      initialValues: {
        ccode: "",
        ctitle: "",
      },
      onSubmit: (values) => {
        axios
          .post(
            "http://localhost:8000/admin/createCourse",
            values
          )
          .then((res) => {
            setCourses([...courses, res.data.course])
          })
          .catch((err) => {
            console.log(err);
          });
      },
    });
  
    return (
      <div>
        <Navbar></Navbar>
        <Homebar></Homebar>
        <div class="col d-flex justify-content-center" style={{'marginLeft':'25%'}}>
        <div class="card text-center m-2" style={{'width':'95%'}}>
          <div class="card-header display-5 fw-bold" style={{'color': 'white', 'backgroundColor':'#0F245A'}}>
            Create Course
          </div>
          <div class="card-body">
            <form onSubmit={formik.handleSubmit} className="pass-form">
              <br />
            <div className="fieldWrap">
              <input
                className='ccode'
                id="ccode"
                name="ccode"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.ccode}
                placeholder="enter course code"
              />
              <input
                className='ctitle'
                id="ctitle"
                name="ctitle"
                type="ctitle"
                onChange={formik.handleChange}
                value={formik.values.ctitle}
                placeholder="enter course title"
              />
            </div>
            <br />
            <button type="submit" className="createCourse" >
              Create Course
            </button>
          </form>
        </div>
      </div>
      </div >
      <br /> <br />
      <div class="col d-flex justify-content-center" style={{'marginLeft':'25%'}}>
        <div class="card text-center m-2" style={{'width':'95%'}}>
            <div className="Courses display-5 fw-bold" style={{'color': 'white', 'backgroundColor':'#0F245A'}}>
              Courses
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col" style={{'text-align':'center'}}>Course ID</th>
                  <th scope="col" style={{'text-align':'center'}}>Title</th>
                </tr>
              </thead>
              <tbody>
              {courses.map((course, idx)=> (
                <tr key={idx}>
                  <th scope="row">{idx}</th>
                  <td><u className="courseToSection text-primary" onClick={goToSections}>{course.ID} </u></td>
                  <td>{course.title}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
      </div>
      </div>
    );
  }