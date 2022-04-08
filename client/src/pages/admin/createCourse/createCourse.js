import "./createCourse.css";
import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import { useNavigate } from "react-router";
import { useFormik } from "formik";


export default function CreateCourse() {
    // const navigate = useNavigate();
  
    const formik = useFormik({
      initialValues: {
        ccode: "",
        ctitle: "",
      },
      onSubmit: (values) => {
        axios
          .post(
            "https://d42ee15d-01be-46e2-b17f-ea13beef724b.mock.pstmn.io/changepwd",
            values
            // {withCredentials: true}
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      },
    });
  
    return (
      <div>
        <div className="nav">
          <Navbar/>
        </div>

        <div className="searchbyRoll">
          <form onSubmit={formik.handleSubmit} className="pass-form">
            <h2>Create A New Course</h2>
            <div className="fieldWrap">
              <label htmlFor="ccode">Course Code</label> <br></br>
              <input
                id="ccode"
                name="ccode"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.ccode}
                placeholder="enter course code"
              />
            </div>
  
            <br />
  
            <div className="fieldWrap">
              <label htmlFor="ctitle">Course Title</label> <br></br>
              <input
                id="ctitle"
                name="ctitle"
                type="ctitle"
                onChange={formik.handleChange}
                value={formik.values.ctitle}
                placeholder="enter course title"
              />
            </div>
            <br />
            <br />
            <button type="search" color="navy">
              Create Course
            </button>
          </form>
        </div>
      </div>
    );
  }