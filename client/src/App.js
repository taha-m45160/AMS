import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';

//Common
import Login from './pages/misc/Login/Login.js'

//Student
import StudentHomepage from './pages/student/Homepage/Homepage'
import StudentCourses from './pages/student/courses/courses'
import CourseHome from './pages/student/courses/overview/overview'
import StudentResources from './pages/student/courses/resources/resources'
import StudentAssignments from './pages/student/courses/assignments/assignments'

//Parent
import ParentHomepage from './pages/parents/Homepage/Homepage'




//Teacher
import TeacherHomepage from './pages/teachers/Homepage/Homepage'




//Admin
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
              <Route path="/student/" element={<StudentHomepage/>}/>
              <Route path="/student/courses/" element={<StudentCourses/>}/>
              <Route path="/student/courses/home" element={<CourseHome />}/>
              <Route path="/student/courses/resources" element={<StudentResources />}/>
              <Route path="/student/courses/assignments" element={<StudentAssignments />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
