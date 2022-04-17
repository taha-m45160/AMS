import "./Users.css";
import axios from "axios";
import Navbar from "./../Navbar/Navbar";
import Homebar from "../Homebar/Homebar";
import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import {AddCircle, RemoveCircle} from '@material-ui/icons/';

export default function ChangePassword() {
  const {state} = useLocation();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true; 

  const [students, setStudents] = React.useState(state.students)
  const [teachers, setTeachers] = React.useState(state.teachers)
  const [parents, setParents] = React.useState(state.parents)
  const [admins, setAdmins] = React.useState(state.admins)

  const [ID, setID] = React.useState('')
  const [fname, setFName] = React.useState('')
  const [mname, setMName] = React.useState('')
  const [lname, setLName] = React.useState('')
  const [role, setRole] = React.useState('Student')
  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [parentStudents, setParentStudents] = React.useState([])
  const [numPS, setNumPS] = React.useState(0)

  const [msg, setMsg] = React.useState('')

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    try{
        const user = {
            ID: ID,
            f_name: fname,
            m_name: mname,
            l_name: lname,
            role: role,
            password: password,
            email: email,
            students: parentStudents,
        }
        const res = await axios.post('https://academic-management-system.herokuapp.com/admin/createAccount', user)
        setMsg(res.data.msg)
          setTimeout(() => {
            setMsg('')
        }, 2500)
        if(res.data.user.role === 'Teacher'){
          setTeachers([...teachers, res.data.user])
        } else if(res.data.user.role === 'Admin'){
          setAdmins([...admins, res.data.user])
        } else if(res.data.user.role === 'Parent'){
          setParents([...parents, res.data.user])
        } else if(res.data.user.role === 'Student'){
          setStudents([...students, res.data.user])
        }
        setID('')
        setFName('')
        setMName('')
        setLName('')
        setRole('Student')
        setPassword('')
        setEmail('')
        setParentStudents([])
        setNumPS(0)
    } catch(err) {
        console.log(err)
    }
  }

  const goToUser = async (ev, user_ID) => {
    ev.preventDefault()
    const res = await axios.post("https://academic-management-system.herokuapp.com/admin/getUser", {ID: user_ID})
    navigate('/admin/changePassword', {state:{
      heading: `${res.data.user.name.first} ${res.data.user.name.last} - ${res.data.user.ID}`,
      user: res.data.user
    }})
  }

  const changeRole = async (ev, r) => {
    ev.preventDefault()
    setRole(r)
    if(r !== 'Parent'){
        setParentStudents([])
        setNumPS(0)
    }
  }
  const changeID = async (ev) => {
    ev.preventDefault()
    setID(ev.target.value)
  }
  const changeFName = async (ev) => {
    ev.preventDefault()
    setFName(ev.target.value)
  }
  const changeMName = async (ev) => {
    ev.preventDefault()
    setMName(ev.target.value)
  }
  const changeLName = async (ev) => {
    ev.preventDefault()
    setLName(ev.target.value)
  }

  const changePassword = async (ev) => {
    ev.preventDefault()
    setPassword(ev.target.value)
  }
  const changeEmail = async (ev) => {
    ev.preventDefault()
    setEmail(ev.target.value)
  }

  const parentStudentsChange = (ev, index) => {
    let pS = parentStudents
    pS[index] = ev.target.value
    setParentStudents(pS)
}
const increasePS = (ev) => {
    ev.preventDefault();
    setNumPS(numPS+1)
    setParentStudents([...parentStudents, ""])
}

const decreasePS = (ev) => {
    ev.preventDefault();
    setNumPS(numPS-1)
    let pS = parentStudents
    pS.pop()
    setParentStudents(pS)
}

  return (
  <div>
    <Navbar></Navbar>
    <Homebar></Homebar>
    <div className="col d-flex justify-content-center" id="col1">
        <div className="card text-center m-2" style={{'width':'95%'}}>
          <div className="card-header display-5 fw-bold" style={{'color': 'white', 'backgroundColor':'#0F245A'}}>
            Create New User
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="createNewUserForm">

            <input
                type='text'
                className='inputField_ID'
                onChange={changeID}
                value={ID}
                placeholder="Enter ID"
                required
              />
              <br />

            <input
                type='text'
                className='inputField_name'
                onChange={changeFName}
                value={fname}
                placeholder="Enter first name"
                required
            />
            <input
                type='text'
                className='inputField_name'
                onChange={changeMName}
                value={mname}
                placeholder="Enter middle name"
            />

            <input
                type='text'
                className='inputField_name'
                onChange={changeLName}
                value={lname}
                placeholder="Enter last name"
                required
            />

            {role==='Parents' && <input
                type='text'
                className='inputField_name'
                onChange={changeLName}
                value={lname}
                placeholder="Enter last name"
                required
            />}

            <br /> <br />

            <label htmlFor="Role" className="ms-5">Select term:</label>
              <div className="Role btn-group ms-3" role="group">
                {role === 'Teacher' && <div>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Student')}}>Student</button>
                <button type="button" className="btn btn-primary fw-bold"onClick={(ev) => {changeRole(ev, 'Teacher')}}>Teacher</button>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Parent')}}>Parent</button>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Admin')}}>Admin</button>
                </div>}
                {role === 'Student' && <div>
                <button type="button" className="btn btn-primary fw-bold" onClick={(ev) => {changeRole(ev, 'Student')}}>Student</button>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Teacher')}}>Teacher</button>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Parent')}}>Parent</button>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Admin')}}>Admin</button>
                </div>}
                {role === 'Parent' && <div>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Student')}}>Student</button>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Teacher')}}>Teacher</button>
                <button type="button" className="btn btn-primary fw-bold" onClick={(ev) => {changeRole(ev, 'Parent')}}>Parent</button>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Admin')}}>Admin</button>
                </div>}
                {role === 'Admin' && <div>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Student')}}>Student</button>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Teacher')}}>Teacher</button>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Parent')}}>Parent</button>
                <button type="button" className="btn btn-primary fw-bold" onClick={(ev) => {changeRole(ev, 'Admin')}}>Admin</button>
                </div>}
                {role === '' && <div>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Student')}}>Student</button>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Teacher')}}>Teacher</button>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Parent')}}>Parent</button>
                <button type="button" className="btn btn-secondary fw-bold" onClick={(ev) => {changeRole(ev, 'Admin')}}>Admin</button>
                </div>}
              </div>

              <br /> <br />
            
              <input
                type='password'
                className='inputField_ID'
                onChange={changePassword}
                value={password}
                placeholder="Enter password"
                required
                minLength={8}
            />
            <br />
            <input
                type='email'
                className='inputField_ID'
                onChange={changeEmail}
                value={email}
                placeholder="Enter email address"
                required
            />

                {(role==="Parent") && <div>
                    <h4 className="lead fw-bold mt-3">Students affiliated:</h4>
                    {parentStudents.map((loc, index) => (
                        <div key={index} className="my-2 ms-3">
                            <h4 className="lead fw-bold mt-2">Student #{index+1}:</h4>
                            <input type="text" className="me-2 mt-2" placeholder="Student ID" onChange={(ev) => {parentStudentsChange(ev, index)}} required/>
                            <br />
                        </div>
                    ))}
                    <AddCircle style={{"color":"blue"}} onClick={increasePS}></AddCircle>
                    {numPS>0 && <RemoveCircle style={{"color":"red"}} onClick={decreasePS}></RemoveCircle>}
                </div> }
                <br /><br />
                <button className="createUserButton"> Create User</button>
          </form>
          <br />
          <span className="text-success">{msg}</span>
        </div>
      </div>
      </div >
    <div className="col d-flex justify-content-center"  id= "col2">
        <div className="card text-center m-2" style={{'width':'95%'}}>
            <div className="Users display-5 fw-bold" style={{'color': 'white', 'backgroundColor':'#0F245A'}}>
              Users
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col" style={{'textAlign':'center'}}>ID</th>
                  <th scope="col" style={{'textAlign':'center'}}>Name</th>
                  <th scope="col" style={{'textAlign':'center'}}>Role</th>
                  <th scope="col" style={{'textAlign':'center'}}>email</th>
                </tr>
              </thead>
              <tbody>
              {teachers.map((teacher, idx)=> (
                <tr key={idx}>
                  <th scope="row">{idx}</th>
                  <td><a className="toUser text-primary" onClick={(ev) => {goToUser(ev, teacher.ID)}}>{teacher.ID} </a></td>
                  <td>{`${teacher.name.first} ${teacher.name.last}`}</td>
                  <td>Teacher</td>
                  <td>{teacher.email}</td>
                </tr>
              ))}
              {students.map((student, idx)=> (
                <tr key={idx}>
                  <th scope="row">{idx}</th>
                  <td><a className="toUser text-primary" onClick={(ev) => {goToUser(ev, student.ID)}}>{student.ID} </a></td>
                  <td>{`${student.name.first} ${student.name.last}`}</td>
                  <td>Student</td>
                  <td>{student.email}</td>
                </tr>
              ))}
              {parents.map((parent, idx)=> (
                <tr key={idx}>
                  <th scope="row">{idx}</th>
                  <td><a className="toUser text-primary" onClick={(ev) => {goToUser(ev, parent.ID)}}>{parent.ID} </a></td>
                  <td>{`${parent.name.first} ${parent.name.last}`}</td>
                  <td>Parent</td>
                  <td>{parent.email}</td>
                </tr>
              ))}
              {admins.map((admin, idx)=> (
                <tr key={idx}>
                  <th scope="row">{idx}</th>
                  <td><a className="toUser text-primary" onClick={(ev) => {goToUser(ev, admin.ID)}}>{admin.ID} </a></td>
                  <td>{`${admin.name.first} ${admin.name.last}`}</td>
                  <td>Admin</td>
                  <td>{admin.email}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
      </div>

  </div>
  );
}
