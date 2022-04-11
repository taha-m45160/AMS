import "./overview.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../../../../components/Navbar/Navbar";
import SidebarS from "../../../../components/Sidebar Student/SidebarS"

export default function TeacherCourseOverview() {
    const ccode = sessionStorage.getItem("course")

    const getTitle = () => {
        // try {
        //     const title = await axios.get(`/student/courses/${ccode}/title`)
        //     return title
        // } catch (err) {
        //     console.log(err)
        // }

        return (
            <h1 className="title">
                Advanced Programming
            </h1>
        );
    }

    const getDesc = () => {
        // try {
        //     const desc = await axios.get(`/student/courses/${ccode}/desc`)
        //     return desc
        // } catch (err) {
        //     console.log(err)
        // }

        return (
            <div className="desc">
            This course introduces students to the threats as well as defenses for securing networks. Students successfully completing this class will be able to evaluate works in academic and commercial security, and will have rudimentary skills in security research. Topics covered include network security, authentication, security protocol design and analysis, security modeling, trusted computing, key management, program safety, intrusion detection, DDoS detection and mitigation, architecture/operating systems security, security policy, web security, and other emerging topics.
            </div>
        );
    }

    const getInstr = () => {
        // try {
        //     const instr = await axios.get(`/student/courses/${ccode}/instructor`)
        //     return instr
        // } catch (err) {
        //     console.log(err)
        // }

        return (
            <div className="instructor">
                Dr. Junaid Haroon
            </div>
        );
    }

    const getGradeBreakup = () => {
        // try {
        //     const gb = await axios.get(`/student/courses/${ccode}/gb`)
        //     return gb
        // } catch (err) {
        //     console.log(err)
        // }

        return (
            <div className="gb">
                Assignments 35% <br></br>
                Quizzes 18% <br></br>
                CP 2% <br></br>
                Midterm 20% <br></br>
                Final 25%
            </div>
        );
    }

    const displayOverview = () => {
        return (
            <div className="course-info">
                {getTitle()}
                <br></br>
                {getDesc()}
                <br></br>
                {getInstr()}
                <br></br>
                {getGradeBreakup()}
                <br></br>
            </div>
        );
    }

    return (
        <div className="course-overview">
            <Navbar />
            <SidebarS />
            {displayOverview()}
        </div>
    );
}