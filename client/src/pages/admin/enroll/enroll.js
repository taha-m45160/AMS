import "./Enroll.css";
import axios from "axios";
import Navbar from "./../Navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import React from 'react'
import Homebar from '../Homebar/Homebar'


export default function Enroll() {
    const {state} = useLocation();
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const [students, setStudents] = React.useState(state.students)
    const [teachers, setTeachers] = React.useState(state.teachers)
    const [role, setRole] = React.useState('')
    const [userSelected, setUserSelected] = React.useState('')
    const [list, setList] = React.useState([])

      const enroll = async (ev) => {
        ev.preventDefault();
        try{
            const enroll = {
              user_ID: userSelected,
              role: role,
              course_ID: state.section.course_ID,
              section_ID: state.section.ID,
              term: state.section.term,
              year: state.section.year
            }
            const res = await axios.post("http://localhost:8000/admin/enroll", enroll)
            if(role === 'Student'){
              setStudents([...students, {student_ID: res.data.user.ID}])
            } else if(role === 'Teacher') {
              setTeachers([...teachers, {teacher_ID: res.data.user.ID}])
            }
        } catch(err){
          console.log(err);
        }
      }

      const goToUser = async (ev, user_ID) => {
        ev.preventDefault()
        const res = await axios.post("http://localhost:8000/admin/getUser", {ID: user_ID})
        navigate('/admin/changePassword', {state:{
          heading: `${res.data.user.name.first} ${res.data.user.name.last} - ${res.data.user.ID}`,
          user: res.data.user
        }})
      }
      
      const changeRole = async (ev, r) => {
        ev.preventDefault()
        setRole(r)
        const res = await axios.get(`http://localhost:8000/admin/get${r}s`)
        setList(res.data.users)
      }

      const changeUserSelected = async (ev) => {
        ev.preventDefault()
        setUserSelected(ev.target.value)
      }

    return (
      <div>
        <Navbar></Navbar>
        <Homebar></Homebar>
        <div className="col d-flex justify-content-center" style={{'marginLeft':'350px'}}>
        <div className="card text-center m-2" style={{'width':'95%'}}>
          <div className="card-header display-5 fw-bold" style={{'color': 'white', 'backgroundColor':'#0F245A'}}>
            Enroll
          </div>
          <div className="card-body">
            <form onSubmit={enroll} className="pass-form">
              <br />
            <div className="fieldWrap">
              <label htmlFor="Role" className="ms-5">Select term:</label>
              <div className="Role btn-group ms-3" role="group">
                {role === 'Teacher' && <div>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Student')}}>Student</button>
                <button type="button" className="btn btn-primary fw-bold"onClick={(ev) => {changeRole(ev, 'Teacher')}}>Teacher</button>
                </div>}
                {role === 'Student' && <div>
                <button type="button" className="btn btn-primary fw-bold" onClick={(ev) => {changeRole(ev, 'Student')}}>Student</button>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Teacher')}}>Teacher</button>
                </div>}
                {role === '' && <div>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Student')}}>Student</button>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Teacher')}}>Teacher</button>
                </div>}
              </div>
              <br />
            </div>
            <br />
            <label htmlFor="selectMenu">User:</label>
              {role!=='' && <select className="selectMenu form-select form-select-lg ms-3" value={userSelected} onChange={changeUserSelected}
              style={{'width':'30%', display:'inline-flex'}} required>
                <option value=''>Select user</option>
                {list.map((user, idx) => (
                  <option key={idx} value={user.ID}>{`${user.ID} - ${user.name.first} ${user.name.last}`}</option>
                ))}
              </select>}
              {role==='' && <select className="selectMenu form-select disabled form-select-lg ms-3"
              style={{'width':'30%', display:'inline-flex'}} required>
              </select>}

            <br /> <br />
            <button type="submit" className="Enroll" >
              Enroll
            </button>
          </form>
        </div>
      </div>
      </div >
      <br /> <br />
      <div className="col d-flex justify-content-center" style={{'marginLeft':'350px'}}>
        <div className="card text-center m-2" style={{'width':'95%'}}>
            <div className="Courses display-5 fw-bold" style={{'color': 'white', 'backgroundColor':'#0F245A'}}>
              {state.section.course_ID}: {state.section.course_title} - Section {state.section.ID} ({state.section.term}-{state.section.year})
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col" style={{'textAlign':'center'}}>ID</th>
                  <th scope="col" style={{'textAlign':'center'}}>Role</th>
                </tr>
              </thead>
              <tbody>
              {teachers.map((teacher, idx)=> (
                <tr key={idx}>
                  <th scope="row">{idx}</th>
                  <td><a className="toUser text-primary" onClick={(ev) => {goToUser(ev, teacher.teacher_ID)}}>{teacher.teacher_ID} </a></td>
                  <td>Teacher</td>
                </tr>
              ))}
              {students.map((student, idx)=> (
                <tr key={idx}>
                  <th scope="row">{idx}</th>
                  <td><a className="toUser text-primary" onClick={(ev) => {goToUser(ev, student.student_ID)}}>{student.student_ID} </a></td>
                  <td>Student</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
      </div>
      </div>
    );
  }