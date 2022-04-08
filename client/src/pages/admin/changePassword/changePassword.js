import "./changePassword.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import searchIcon from "../../../images/search.png";
import Navbar from "../../../components/Navbar/Navbar";

// TO DO:
// Response Error Handling
// Navigation
// History

export default function ChangePassword() {
  // const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      roll: "",
      pass: "",
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
          <h2>Change Password</h2>
          <img className="search" src={searchIcon} alt="Search Icon" />
          <div className="fieldWrap">
            <label htmlFor="roll">Roll Number</label> <br></br>
            <input
              id="roll"
              name="roll"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.roll}
              placeholder="enter student roll number"
            />
          </div>

          <br />

          <div className="fieldWrap">
            <label htmlFor="pass">New Password</label> <br></br>
            <input
              id="pass"
              name="pass"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.pass}
              placeholder="enter new password"
            />
          </div>
          <br />
          <br />
          <button type="search" color="navy">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
