import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import Login from './pages/misc/Login/Login.js'

import AdminHomepage from './pages/admin/Homepage/Homepage'

import ChangePassword from './pages/admin/changePassword/changePassword'

import Courses from './pages/admin/Courses/Courses'
import Enroll from './pages/admin/enroll/enroll'

function App() {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/" element={<Login />}/>

              <Route path="/admin/" element={(<AdminHomepage />)}/>
              <Route path="/admin/users" element={<ChangePassword />}/>
              <Route path="/admin/courses" element={<Courses/>}/>
              <Route path="/admin/enroll" element={<Enroll/>}/>
          
          </Routes>
      </Router>
    </div>
  );
}

export default App;
