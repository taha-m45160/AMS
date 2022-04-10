import "./changePassword.css";
import axios from "axios";
import { useFormik } from "formik";
import searchIcon from "../../../images/search.png";
import Navbar from "../../../components/Navbar/Navbar";

export default function ChangePassword() {

  async function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  }

  axios.defaults.withCredentials = true; 
  const formik = useFormik({
    initialValues: {
      roll: "",
      pass: "",
    },
    onSubmit: async (values) => {
      let password = await hash(values.pass)
      axios
        .post(
          "http://localhost:8000/admin/changePassword",
          {ID: values.roll, password: password}
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
              placeholder="Enter ID"
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
              placeholder="Enter new password"
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
