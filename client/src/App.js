import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import Login from './pages/misc/Login/Login.js'
import HomepageS from './pages/student/Homepage/HomepageS'
import HomepageA from './pages/admin/Homepage/HomepageA'
import HomepageP from './pages/parents/Homepage/HomepageP'
import ChangePassword from './pages/admin/changePassword/changePassword';
import CreateCourse from './pages/admin/createCourse/createCourse';
import Enroll from './pages/admin/enroll/enroll'
import Courses from './pages/student/courses/courses'
import CourseOverview from './pages/student/courses/overview/overview'
import Resources from './pages/student/courses/resources/resources';

function App() {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/admin/" element={(<HomepageA />)}/>
              <Route path="/admin/changepassword" element={<ChangePassword />}/>
              <Route path="/admin/createcourse" element={<CreateCourse/>}/>
              <Route path="/admin/enroll" element={<Enroll/>}/>
              <Route path="/student/" element={(<HomepageS />)} />
              <Route path="/student/courses" element={<Courses/>}/>
              <Route path="/student/courses/CS-300/overview" element={<CourseOverview/>}/>
              <Route path="/student/courses/CS-300/resources" element={<Resources/>}/>
              <Route path="/parents/" element={(<HomepageP />)}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
