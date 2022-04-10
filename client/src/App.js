import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import Login from './pages/misc/Login/Login.js'

import HomepageA from './pages/admin/Homepage/HomepageA'
import ChangePassword from './pages/admin/changePassword/changePassword'
import CreateCourse from './pages/admin/createCourse/createCourse'
import CreateAccount from './pages/admin/createAccount/createAccount'

import HomepageS from './pages/student/Homepage/HomepageS'
import HomepageP from './pages/parents/Homepage/HomepageP'
import HomepageT from './pages/teachers/Homepage/HomepageT'

import Courses from './pages/student/courses/courses'
import CourseOverview from './pages/student/courses/overview/overview'
import Resources from './pages/student/courses/resources/resources'
import TeacherHomepage from './pages/teachers/Homepage/HomepageT'
import TeacherCourses from './pages/teachers/Courses/teachercourses'
import TeacherCourseOverview from './pages/teachers/Courses/overview/overview';

function App() {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/" element={<Login />}/>

              <Route path="/admin/" element={(<HomepageA />)}/>
              <Route path="/admin/changePassword" element={<ChangePassword />}/>
              <Route path="/admin/createCourse" element={<CreateCourse/>}/>
              <Route path="/admin/createAccount" element={<CreateAccount/>}/>

              <Route path="/student/" element={(<HomepageS />)} />
              <Route path="/student/courses" element={<Courses/>}/>
              <Route path="/student/courses/CS-300/overview" element={<CourseOverview/>}/>
              <Route path="/student/courses/CS-300/resources" element={<Resources/>}/>
              <Route path="/parent/" element={(<HomepageP />)}/>
              <Route path="/teacher/" element={(<TeacherHomepage />)} />
              <Route path="/teacher/courses" element={(<TeacherCourses />)} />
              <Route path="/teacher/courses/CS-300/overview" element={(<TeacherCourseOverview />)} />
          
          </Routes>
      </Router>
    </div>
  );
}

export default App;
