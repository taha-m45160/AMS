import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import Login from './pages/misc/Login/Login.js'

import AdminHomepage from './pages/admin/Homepage/Homepage'
import StudentHomePage from './pages/student/Homepage/HomepageS'

import ChangePassword from './pages/admin/changePassword/changePassword'

import CreateCourse from './pages/admin/createCourse/createCourse'
import Enroll from './pages/admin/enroll/enroll'

import StudentCourses from './pages/student/courses/courses'

function App() {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/" element={<Login />}/>

              <Route path="/admin/" element={(<AdminHomepage />)}/>
              <Route path="/admin/users" element={<ChangePassword />}/>
              <Route path="/admin/courses" element={<CreateCourse/>}/>
              <Route path="/admin/enroll" element={<Enroll/>}/>
              <Route path="/student/" element={<StudentHomePage/>}/>
              <Route path="/student/courses/" element={<StudentCourses/>}/>
          
          </Routes>
      </Router>
    </div>
  );
}

export default App;
