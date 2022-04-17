import "./Announcements.css";
import axios from "axios";
import Navbar from "./../Navbar/Navbar";
import Homebar from "../Homebar/Homebar";
import React from 'react'
import { useLocation } from "react-router-dom";

export default function Announcements() {
  const {state} = useLocation();
  axios.defaults.withCredentials = true; 

  return (
  <div>
    <Navbar></Navbar>
    <Homebar></Homebar>
        <div className="col d-flex justify-content-center" id="col7">
            <div className="card text-center m-2" style={{'width':'95%',}}>
                <div className="card-body">
                <div className="card-header display-5 fw-bold" style={{'color': 'white', 'backgroundColor':'#0F245A'}}>
                    Announcements
                </div>
                {state.announcements.map((announcement, idx) => (
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
        </div >
  </div>
  );
}
