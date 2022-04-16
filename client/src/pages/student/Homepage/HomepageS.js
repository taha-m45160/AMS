import React from 'react'
import './HomepageS.css'
import Navbar from './../../admin/Navbar/Navbar'
import Homebar from '../../../components/HomebarS/HomebarS'
import {useLocation} from 'react-router-dom'

const App = () => {
    // const {state} = useLocation();

    return (
        <div className='home-container'>
            <Navbar></Navbar>
            <Homebar></Homebar>
            <div className='Welcome display-3'>
                {/* <h2 className='display-1' align='center'>Welcome back, <span style={{'font-weight': 'bold'}}>{state.name}</span>!</h2> */}
                <h2 className='display-1' align='center'>Welcome back, <span style={{'font-weight': 'bold'}}>Samee Arif</span>!</h2>
            </div>
            <br />
            <h1 className="heading display-5 fw-bold" >Announcements</h1>
            <div className="list-group">
                {/* {state.announcements.map((announcement) => (
                    <a className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="display-6" style={{'font-weight': 'bold'}}>{announcement.title}</h5>
                        </div>
                        <p className="mb-1">{announcement.body}</p>
                        <small style={{'font-weight': 'bold'}}> {announcement.date.toString()}</small >
                    </a>
                ))} */}
                <a className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="display-6" style={{'font-weight': 'bold'}}>My announcment</h5>
                        </div>
                        <p className="mb-1">Quiz on 24th May</p>
                        <small style={{'font-weight': 'bold'}}>24/5/2020</small >
                    </a>
            </div>
        </div>
    )
}

export default App