import React from 'react'
import './quizzes.css'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Homebar/Homebar";
import axios from "axios";

const Quizzes = () => {
    // const {state} = useLocation();
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    // const [courses, setCourses] = React.useState(state.courses)

    const goToFeedback = () => {
        const res = axios.get(
            "localhost:8000/quizfeedback"
        )

        navigate('/student/courses/quizzes/quizfeedback', {
            state: res
        })
    }

    const goToQuiz = () => {
        const res = axios.get(
            "localhost:8000/quizdata"
        )

        navigate('/student/courses/quizzes/attemptquiz', {
            state: res
        })
    }


    let quizzes = [{ "ID": "1", "title": "Quiz 1", "publishedDate": "24/10/2021", "deadline": "24/10/2021" }]
    let pastQuizzes = [{ "ID": "1", "title": "Quiz 1", "publishedDate": "24/10/2021", "deadline": "24/10/2021" }]

    return (
        <div>
            <Navbar></Navbar>
            <Sidebar></Sidebar>

            <div class="col d-flex justify-content-center" style={{ 'marginLeft': '25%' }}>
                <div class="card text-center m-2" style={{ 'width': '95%' }}>
                </div>
            </div >

            <br /> <br />

            <div class="col d-flex justify-content-center" style={{ 'marginLeft': '25%', 'border-radius': '15px' }}>
                <div class="card text-center m-2" style={{ 'width': '95%' }}>

                    <div className="Courses display-5 fw-bold" style={{ 'color': 'white', 'backgroundColor': '#0F245A' }}>Active Quizzes</div>

                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col" style={{ 'text-align': 'center' }}>Quiz Title</th>
                                <th scope="col" style={{ 'text-align': 'center' }}>Published On</th>
                                <th scope="col" style={{ 'text-align': 'center' }}>Deadline</th>
                            </tr>
                        </thead>
                        <tbody>
                            {quizzes.map((quiz, idx) => (
                                <tr key={idx} onClick={() => goToQuiz()}>
                                    <th scope="row">{idx + 1}</th>
                                    <td>{quiz.title}</td>
                                    <td>{quiz.publishedDate}</td>
                                    <td>{quiz.deadline}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="col d-flex justify-content-center" style={{ 'marginLeft': '25%', 'borderRadius': '15px' }}>
                <div class="card text-center m-2" style={{ 'width': '95%' }}>

                    <div className="Courses display-5 fw-bold" style={{ 'color': 'white', 'backgroundColor': '#0F245A' }}>Past Quizzes</div>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col" style={{ 'text-align': 'center' }}>Quiz Title</th>
                                <th scope="col" style={{ 'text-align': 'center' }}>Published On</th>
                                <th scope="col" style={{ 'text-align': 'center' }}>Deadline</th>
                                <th scope="col" style={{ 'text-align': 'center' }}>Feedback </th>
                            </tr>
                        </thead>
                        <tbody>
                            {pastQuizzes.map((quiz, idx) => (
                                <tr key={idx}>
                                    <th scope="row">{idx + 1}</th>
                                    <td>{quiz.title}</td>
                                    <td>{quiz.publishedDate}</td>
                                    <td>{quiz.deadline}</td>
                                    <td><u className="courseToSection text-primary" onClick={() => goToFeedback()}>View Feedback</u></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Quizzes

