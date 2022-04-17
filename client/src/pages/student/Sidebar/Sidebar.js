import React from 'react'
import './Sidebar.css'
import {useNavigate} from 'react-router-dom'
import {People, MenuBook, Announcement, Book, Assignment, Help, ListAlt} from '@material-ui/icons/';
import QuizIcon from '@mui/icons-material/Quiz';
import axios from 'axios';


const Sidebar = () => {

    const navigate = useNavigate();
    const [errMsg, setErrMsg] = React.useState('')
    axios.defaults.withCredentials = true

    const goToOutline = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.post('https://academic-management-system.herokuapp.com/students/getCourseDetails', {ccode: sessionStorage.getItem('ccode')})
            navigate(`/student/course/overview`, {state:{
                data: res.data
            }})
        }
        catch (err) {
            console.log(err)
        }
    }

    const goToResources = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.post('https://academic-management-system.herokuapp.com/students/getResources', {ccode: sessionStorage.getItem('ccode')});
            console.log(res.data.resources)
            navigate('/students/resources', {state: {
                resources: res.data.resources,
            }})
        }
        catch (err) {
            console.log(err)
        }
    }

    const goToQuiz = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.post('https://academic-management-system.herokuapp.com/students/getQuizzes', {ccode: sessionStorage.getItem('ccode')});
            console.log(res.data.quizzes)
            navigate('/students/quizzes', {state: {
                quizzes: res.data.quizzes,
            }})
        }
        catch (err) {
           console.log(err)
        }
    }

    const goToAssignments = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.post('https://academic-management-system.herokuapp.com/students/getAssignments', {ccode: sessionStorage.getItem('ccode')});
            console.log(res.data.assignments)
            navigate('/students/assignments', {state: {
                assignments: res.data.assignments,
            }})
        }
        catch (err) {
            console.log(err)
        }
    }

    const goToGradebook = async (ev) => {
        ev.preventDefault();
        try{
            const res = await axios.get('https://academic-management-system.herokuapp.com/ADD-PATH', {withCredentials: true});
            if (res.data.gradebook.length === 0){
                setErrMsg("No gradebook found.")
            }
            else {
                navigate('ADD NAV', {state: {
                    gradebook: res.data,
                }})
            }
        }
        catch (err) {
            if(err.response){
                setErrMsg(err.response.statusText)
            }
        }
    }

    return(
        <div className='bar2'>
            <ul className='bar-container2'>
                <li className='item2'>
                    <ListAlt className='icon2'></ListAlt>
                    <a className='click-items2' onClick={goToOutline}>Outline</a>
                </li>
                <li className='item2'>
                    <MenuBook className='icon2'></MenuBook>
                    <a className='click-items2' onClick={goToResources}>Resources</a>
                </li>
                <li className='item2'>
                    <QuizIcon className='icon2'></QuizIcon>
                    <a className='click-items2' onClick={goToQuiz}>Quizzes</a>
                </li>
                <li className='item2'>
                    <Assignment className='icon2'></Assignment>
                    <a className='click-items2' onClick={goToAssignments}>Assignmnets</a>
                </li>
                <li className='item2'>
                    <Book className='icon2'></Book>
                    <a className='click-items2' onClick={goToGradebook}>Gradebook</a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar