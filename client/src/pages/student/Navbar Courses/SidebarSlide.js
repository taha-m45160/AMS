import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu} from './SidebarElements';
import {People, MenuBook, Announcement, Book, Assignment, Help, ListAlt} from '@material-ui/icons/';
import QuizIcon from '@mui/icons-material/Quiz';
import {useNavigate} from 'react-router-dom'
import './SidebarSlide.css'
import axios from 'axios';

const SideBar = ({ isOpen, toggle }) => {

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


    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <ul className='bar-container1'>
                    <li className='item1'>
                        <ListAlt className='icon1'></ListAlt>
                        <a className='click-items1' onClick={goToOutline}>Outline</a>
                    </li>
                    <li className='item1'>
                        <MenuBook className='icon1'></MenuBook>
                        <a className='click-items1' onClick={goToResources}>Resources</a>
                    </li>
                    <li className='item1'>
                        <QuizIcon className='icon1'></QuizIcon>
                        <a className='click-items1' onClick={goToQuiz}>Quizzes</a>
                    </li>
                    <li className='item1'>
                        <Assignment className='icon1'></Assignment>
                        <a className='click-items1' onClick={goToAssignments}>Assignmnets</a>
                    </li>
                    <li className='item1'>
                        <Book className='icon1'></Book>
                        <a className='click-items1' onClick={goToGradebook}>Gradebook</a>
                    </li>
                </ul>
                </SidebarMenu>
            </SidebarWrapper>
        </SideBarContainer>
    );
};

export default SideBar;
