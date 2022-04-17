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
import StudentAssignment from './pages/student/courses/assignments/assignment/assignment'
import StudentQuizzes from './pages/student/courses/quizzes/quizzes'
import StudentAttemptQuiz from './pages/student/courses/quizzes/attemptQuiz/attemptQuiz'
//Parent
import ParentHomepage from './pages/parents/Homepage/Homepage'




//Teacher
import TeacherHomepage from './pages/teachers/Homepage/Homepage'




//Admin
import AdminHomepage from './pages/admin/Homepage/Homepage'
import Sections from './pages/admin/Sections/Sections'
import Courses from './pages/admin/Courses/Courses'
import Enroll from './pages/admin/Enroll/Enroll'
import ChangePassword from './pages/admin/changePassword/changePassword'
import Users from './pages/admin/Users/Users'
import Announcements from './pages/admin/Announcements/Announcements'





function App() {
  return (
    <div>
      <Router>
          <Routes>
          <Route path="/" element={<Login />}/>
              <Route path="/admin/" element={(<AdminHomepage />)}/>
              <Route path="/admin/users" element={(<Users />)}/>
              <Route path="/admin/courses" element={<Courses/>}/>
              <Route path="/admin/sections" element={<Sections/>}/>
              <Route path="/admin/enroll" element={<Enroll/>}/>
              <Route path="/admin/changePassword" element={<ChangePassword/>}/>
              <Route path="/admin/announcements" element={<Announcements/>}/>
              
              <Route path="/student/" element={<StudentHomepage/>}/>
              <Route path="/student/courses/" element={<StudentCourses/>}/>
              <Route path="/student/courses/home" element={<CourseHome />}/>
              <Route path="/student/courses/resources" element={<StudentResources />}/>
              <Route path="/student/courses/assignments" element={<StudentAssignments />}/>
              <Route path="/student/courses/assignments/assignment" element={<StudentAssignment />}/>
              <Route path="/student/courses/quizzes" element={<StudentQuizzes />}/>
              <Route path="/student/courses/quizzes/attemptquiz" element={<StudentAttemptQuiz />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
