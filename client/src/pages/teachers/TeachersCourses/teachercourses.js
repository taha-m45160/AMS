import "./teachercourses.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Homebar from "../Homebar/Homebar";


export default function TeacherCourses() {
    const navigate = useNavigate();

    const displayCourses = () => {
        // try {
        //     const enrolledCourses = await axios.get('http://localhost:8000/teacher/courses')
        // } catch (err) {
        //     console.log(err)
        // }

        const enrolledCourses = [
            {code:'CS-300', title:'Advanced Programming'}, 
            {code:'CS-582', title:'Distributed Systems'},
            {code:'CS-535', title:'Machine Learning'},
            {code:'CS-473', title:'Network Security'},
            {code:'CS-310', title:'Algorithms'}
        ]
        const courseComponents = []

        const toCourse = (id, title) => {
            sessionStorage.setItem("ccode", id)
            sessionStorage.setItem("ctitle", title)
            navigate(`/teacher/courses/${id}/overview`)
        }

        enrolledCourses.map((course) => {
            courseComponents.push(
                <button className="tab" onClick={() => toCourse(course.code, course.title)}>
                    <h3>{course.code}</h3>
                    <h3>{course.title}</h3>
                </button>
            )
        })

        return courseComponents
    }

    return (
        <div className="courses">
            <Navbar/>
            <Homebar/>

            <h1>Courses</h1>

            <div className="course-tabs">
                {displayCourses().map((comp) => {
                    return comp
                })}
            </div>
        </div>
    );
}