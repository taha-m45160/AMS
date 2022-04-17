import React from 'react'
import Navbar from "../../../Navbar/Navbar";
import Sidebar from "../../../Homebar/Homebar";
import { useLocation } from "react-router-dom";
import axios from "axios"

const AttemptQuiz = () => {
    const [answers, setAnswers] = React.useState(new Array(2))
    const [instructions, setInstructions] = React.useState('Instructions')

    let test = [{"question":"What is your age?", "options":["17", "18", "19", "20"], "marks":"4"}, {"question":"What is your name?", "options":["Samee", "Mutahar", "Taha", "Bilal"], "marks":"2"}]

    const handleChange = (ev, idx, val) => {
        ev.preventDefault()

        let newList = [...answers]
        newList[idx] = {
            ansId: idx,
            ansVal: val
        }
        setAnswers(newList)
    }

    const submitQuiz = () => {
        // try  {
        //     const res = axios.post(
        //         "localhost:8000",
        //         {
        //             submissionInfo: answers
        //         }
        //     )
        // } catch (submitErr) {
        //     console.log(submitErr)
        // }

        console.log(answers)
    }

    return (
        <div>
            <Navbar></Navbar>
            <Sidebar></Sidebar>

            <h1 className="heading display-5 fw-bold" style={{'margin-left':'57.5%'}}>Quiz 1</h1>
            <h4 style={{'margin-top':'2%', 'margin-left':'57.5%'}}>{instructions}</h4>
            <div className="list-group" style={{'transform':'scale(1)', 'margin-top':'1%'}}>
                {test.map((t, idx) => (
                    <a className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="display-6" style={{'font-weight': 'bold'}}>Q{idx+1}. {t.question}</h5>
                        </div>

                        <small style={{'font-weight': 'bold'}}>Marks: {t.marks}</small >

                        <ul style={{"list-style": "none"}}>
                            <li>
                                <input type="radio" name={"answer" + idx} id={"ans1"+idx} class="answer" onChange={(ev) => handleChange(ev, idx, t.options[0])}></input>
                                <label for={"ans1"+idx} id={"option1"+idx} style={{'font-weight':'bold', 'margin-left':'1%'}} >{t.options[0]}</label>
                            </li>
                            <li>
                                <input type="radio" name={"answer" + idx} id={"ans2"+idx} class="answer" onChange={(ev) => handleChange(ev, idx, t.options[1])}></input>
                                <label for={"ans2"+idx} id={"option2"+idx} style={{'font-weight':'bold', 'margin-left':'1%'}} >{t.options[1]}</label>
                            </li>
                            <li>
                                <input type="radio" name={"answer" + idx} id={"ans3"+idx} class="answer" onChange={(ev) => handleChange(ev, idx, t.options[2])}></input>
                                <label for={"ans3"+idx} id={"option3"+idx} style={{'font-weight':'bold', 'margin-left':'1%'}} >{t.options[2]}</label>
                            </li>
                            <li>
                                <input type="radio" name={"answer" + idx} id={"ans4"+idx} class="answer" onChange={(ev) => handleChange(ev, idx, t.options[3])}></input>
                                <label for={"ans4"+idx} id={"option4"+idx} style={{'font-weight':'bold', 'margin-left':'1%'}} >{t.options[3]}</label>
                            </li>
                        </ul>
                    </a>
                ))}
                <button class="btn btn-primary" type="button" onClick={() => submitQuiz()}>Submit Quiz</button>
            </div>
        </div>
    )
}

export default AttemptQuiz