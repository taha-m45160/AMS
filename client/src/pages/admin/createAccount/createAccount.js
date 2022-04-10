import "./createAccount.css";
import axios from "axios";
import Navbar from "../../../components/Navbar/Navbar";
import { useNavigate } from "react-router";
import { useFormik } from "formik";


export default function CreateAccount() {
    // const navigate = useNavigate();
  
    const formik = useFormik({
      initialValues: {
        ccode: "",
        roll: "",
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
            <h2>Enroll</h2>
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
              <label htmlFor="roll">Roll Number</label> <br></br>
              <input
                id="roll"
                name="roll"
                type="roll"
                onChange={formik.handleChange}
                value={formik.values.roll}
                placeholder="enter student roll number"
              />
            </div>
            
            <br />
            <br />
            <button type="search" color="navy">
              Enroll
            </button>
          </form>
        </div>
      </div>
    );
  }