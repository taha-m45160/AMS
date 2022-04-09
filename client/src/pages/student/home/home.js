import "./home.css";
import axios from "axios";
import { useFormik } from "formik";
import Navbar from "../../../components/Navbar/Navbar";

// TO DO:
// Response Error Handling
// Navigation
// History

export default function StudentHome() {
  return (
    <div className="home">
        <Navbar/>

        <div className="courses">
            
        </div>

        <div className="announcements">

        </div>
    </div>
  );
}