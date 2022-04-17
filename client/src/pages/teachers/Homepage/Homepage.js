import React from 'react'
import './Homepage.css'
import Navbar from '../Navbar/Navbar'
import Homebar from '../Homebar/Homebar'
import {useLocation} from 'react-router-dom'

const App = () => {
    const {state} = useLocation();

    return (
        <div className='home-container'>
            <Navbar></Navbar>
            <Homebar></Homebar>
            <div className='Welcome display-3'>
                <h2 className='display-1' align='center'>Welcome back, <span style={{'fontWeight': 'bold'}}>{state.name}</span>!</h2>
            </div>
            <br />
            <h1 className="heading display-5 fw-bold" >Announcements</h1>
            <div className="list-group">
                {state.announcements.map((announcement, idx) => (
                    <a key={idx} className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="display-6" style={{'fontWeight': 'bold'}}>{announcement.title}</h5>
                        </div>
                        <p className="mb-1">{announcement.body}</p>
                        <small style={{'fontWeight': 'bold'}}> {announcement.date.toString()}</small >
                    </a>
                ))}
            </div>
        </div>
    )
}

export default App