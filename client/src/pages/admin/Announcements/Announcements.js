import "./Announcements.css";
import axios from "axios";
import Navbar from "./../Navbar/Navbar";
import Homebar from "../Homebar/Homebar";
import React from 'react'
import { useLocation } from "react-router-dom";

export default function Announcements() {
  const {state} = useLocation();
  axios.defaults.withCredentials = true; 

  const [announcements, setAnnouncements] = React.useState(state.announcements)
  const [title, setTitle] = React.useState('')
  const [body, setBody] = React.useState('')  
  const [msg, setMsg] = React.useState('')

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const announcement = {
        title: title,
        body: body
    }
    const res = await axios.post("https://academic-management-system.herokuapp.com/admin/createAnnouncement", announcement)
    setMsg(res.data.msg)
      setTimeout(() => {
        setMsg('')
    }, 2500)
    setAnnouncements([...announcements, res.data.announcement])
  }

  const changeBody = (ev) => {
    ev.preventDefault()
    setBody(ev.target.value)
  }

  const changeTitle = (ev) => {
    ev.preventDefault()
    setTitle(ev.target.value)
  }

  return (
  <div>
    <Navbar></Navbar>
    <Homebar></Homebar>
    <div className="col d-flex justify-content-center" id="col5">
        <div className="card text-center m-2" style={{'width':'95%'}}>
            <div className="card-body">
            <div className="card-header display-5 fw-bold" style={{'color': 'white', 'backgroundColor':'#0F245A'}}>
                Announcements
            </div>
            <div className="announcementList list-group text-left ms-3">
                {announcements.map((announcement, idx) => (
                    <a key={idx }className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="display-6" style={{'fontWeight': 'bold'}}>{announcement.title}</h5>
                        </div>
                        <p className="mb-1">{announcement.body}</p>
                        <small style={{'fontWeight': 'bold'}}> {announcement.date.toString()}</small >
                    </a>
                ))}
                </div>
            </div>
      </div>
    </div >
    <div className="col d-flex justify-content-center" id="col6">
        <div className="card text-center m-2" style={{'width':'95%'}}>
          <div className="card-header display-5 fw-bold" style={{'color': 'white', 'backgroundColor':'#0F245A'}}>
            Announcement
          </div>
          <div className="card-body">
          <form onSubmit={handleSubmit} className="createNewUserForm">

            <input
                type='text'
                className='newAnnouncementTitle'
                onChange={changeTitle}
                value={title}
                placeholder="Enter title"
                required
            />
            <br />

            <input
                type='text'
                className='newAnnouncementBody'
                onChange={changeBody}
                value={body}
                placeholder="Enter content"
                required
            />
            <br />
            <button className='CreateAnnouncementButton' type="submit">
                    Post Announcement
            </button>
            </form>
          <br />
          <span className="text-success">{msg}</span>
        </div>
      </div>
      </div >

  </div>
  );
}
