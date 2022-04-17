import "./changePassword.css";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Homebar from "../Homebar/Homebar";
import React from 'react'
import { useLocation } from "react-router-dom";

export default function ChangePassword() {
  const {state} = useLocation();
  async function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  }
  axios.defaults.withCredentials = true; 
  const [pass1, setPass1] = React.useState('')
  const [pass2, setPass2] = React.useState('')  
  const [msg, setMsg] = React.useState('')

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    try{
      if (pass1 === pass2){
      let password = await hash(pass1)
      const res = await axios.post("http://localhost:8000/teacher/changePassword", {ID: state.user.ID, password: password})
      setMsg(res.data)
      setTimeout(() => {
        setMsg('')
    }, 2500)
      setPass1('')
      setPass2('')
      } 
    } catch(err){
        console.log(err);
    }
  }
  const changePass1 = (ev) => {
    ev.preventDefault()
    setPass1(ev.target.value)
  }

  const changePass2 = (ev) => {
    ev.preventDefault()
    setPass2(ev.target.value)
  }

  return (
  <div>
    <Navbar></Navbar>
    <Homebar></Homebar>
    <div className="col d-flex justify-content-center" style={{'marginLeft':'350px'}}>
        <div className="card text-center m-2" style={{'width':'95%'}}>
          <div className="card-header display-5 fw-bold" style={{'color': 'white', 'backgroundColor':'#0F245A'}}>
            {state.heading}
          </div>
          <div className="card-body text-left my-2 fs-2">
          <span className="texxt lead fw-bold "><u>ID</u>:</span>
           <span className="texxt lead ms-3">{state.user.ID}</span>
            <br />
           <span className="texxt lead fw-bold"><u>First Name</u>:</span>
           <span className="texxt lead ms-3 me-5">{state.user.name.first}</span>
           {state.user.name.middle && <div> <span className="texxt lead fw-bold"><u>Middle Name</u>:</span>
           <span className="texxt lead ms-3">{state.user.name.middle}</span>
          </div>}
           <span className="texxt lead fw-bold"><u>Last Name</u>:</span>
           <span className="texxt lead ms-3">{state.user.name.last}</span>
            <br />
           <span className="texxt lead fw-bold"><u>Email</u>:</span>
           <span className="texxt lead ms-3">{state.user.email}</span>
            <br />
           <span className="texxt lead fw-bold"><u>Role</u>:</span>
           <span className="texxt lead ms-3">{state.user.role}</span>
           <br />
           {state.user.role === 'Parent' && <div>
           <span className="texxt lead fw-bold"><u>Students</u>:</span>
          { state.user.students.map((student, idx) => (
              <span className="texxt lead ms-3 me-2">{student}</span>
          ))}
           <span className="texxt lead ms-3">{state.user.role}</span>
             </div>}
        </div>
      </div>
      </div >
        <div className="col d-flex justify-content-center" style={{'marginLeft':'350px'}}>
        <div className="card text-center m-2" style={{'width':'95%'}}>
          <div className="card-header display-5 fw-bold" style={{'color': 'white', 'backgroundColor':'#0F245A'}}>
            Change Password
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="pass-form">
            <input type="password" className="pass" value={pass1} onChange={changePass1} placeholder='Enter new password' minLength={8} required/>
            <input type="password" className="pass" value={pass2} onChange={changePass2} placeholder='Re-enter password' minLength={8} required/>
            <br /> <br />
            <button type="submit" className="ChangePasswordButton" >
              Change password
            </button>
            <br /><br />
            <span className="text-success">{msg}</span>
          </form>
        </div>
      </div>
      </div >

  </div>
  );
}
