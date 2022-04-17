import React from 'react'
import './Quizzes.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from "../../Navbar Courses/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import axios from "axios";

const StudentQuizzes = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    
    const goToFeedback = () => {
        // const res = axios.get(
        //     "https://academic-management-system.herokuapp.com/students/quizfeedback"
        // )

        // navigate('/student/quiz/feedback', {
        //     state: res
        // })
    }

    const goToQuiz = () => {
        // const res = axios.get(
        //     "https://academic-management-system.herokuapp.com/getQuiz"
        // )

        // navigate('/student/quiz/attempt', {
        //     state: res
        // })
    }


    let quizzes = [{ "ID": "1", "title": "Quiz 1", "publishedDate": "24/10/2021", "deadline": "24/10/2021" }]

    return (
        <div>
            <Navbar></Navbar>
            <Sidebar></Sidebar>

            <div class="col d-flex justify-content-center" style={{ 'marginLeft': '25%' }}>
                <div class="card text-center m-2" style={{ 'width': '95%' }}>
                </div>
            </div >

            <br /> <br />

            <div class="col d-flex justify-content-center" id="col15">
                <div class="card text-center m-2" style={{ 'width': '95%' }}>

                    <div className="Courses display-5 fw-bold" style={{ 'color': 'white', 'backgroundColor': '#0F245A' }}>Active Quizzes</div>

                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col" style={{ 'text-align': 'center'}}>Quiz Title</th>
                                <th scope="col" style={{ 'text-align': 'center' }}>Published On</th>
                                <th scope="col" style={{ 'text-align': 'center' }}>Deadline</th>
                            </tr>
                        </thead>
                        <tbody className='activeQuizList'>
                            {quizzes.map((quiz, idx) => (
                                <tr key={idx} onClick={() => goToQuiz()}>
                                    <th scope="row">{idx + 1}</th>
                                    <td style={{color:'blue'}}> <u>{quiz.title}</u> </td>
                                    <td>{quiz.publishedDate}</td>
                                    <td>{quiz.deadline}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="col d-flex justify-content-center" id="col16">
                <div class="card text-center m-2" style={{ 'width': '95%' }}>

                    <div className="Courses display-5 fw-bold" style={{ 'color': 'white', 'backgroundColor': '#0F245A' }}>Past Quizzes</div>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col" style={{ 'text-align': 'center' }}>Quiz Title</th>
                                <th scope="col" style={{ 'text-align': 'center' }}>Open Date</th>
                                <th scope="col" style={{ 'text-align': 'center' }}>Duration</th>
                                <th scope="col" style={{ 'text-align': 'center' }}>Feedback </th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.quizzes.map((quiz, idx) => (
                                <tr key={idx}>
                                    <th scope="row">{idx + 1}</th>
                                    <td>{quiz.title}</td>
                                    <td>{quiz.open_date}</td>
                                    <td>{quiz.duration}</td>
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

export default StudentQuizzes

