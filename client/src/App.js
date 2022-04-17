import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';

//Common
import Login from './pages/misc/Login/Login.js'

//Student
import StudentHomepage from './pages/student/Homepage/Homepage'
import StudentAnnouncements from './pages/student/Announcements/Announcements'
import StudentAccountDetails from './pages/student/AccountDetails/AccountDetails'
import StudentCourses from './pages/student/Courses/Courses'
import StudentCourseOverview from './pages/student/Courses/Overview/Overview'
import StudentResources from './pages/student/Courses/Resources/Resources'
import StudentQuizzes from './pages/student/Courses/Quizzes/Quizzes'
import StudentAssignments from './pages/student/Courses/Assignments/assignments'
import StudentAssignmentSubmissionTab from './pages/student/Courses/Assignments/assignment/assignment'

//Admin
import AdminHomepage from './pages/admin/Homepage/Homepage'
import Sections from './pages/admin/Sections/Sections'
import Courses from './pages/admin/Courses/Courses'
import Enroll from './pages/admin/Enroll/Enroll'
import ChangePassword from './pages/admin/changePassword/changePassword'
import Users from './pages/admin/Users/Users'
import Announcements from './pages/admin/Announcements/Announcements'
import AdminHelp from './pages/admin/Help/Help'

//Teacher
import TeacherHomepage from './pages/teachers/Homepage/Homepage'
import TeacherChangePassword from './pages/teachers/changePassword/changePassword'
import TeacherCourses from './pages/teachers/TeachersCourses/teachercourses'

function App() {
  return (
    <div>
      <Router>
          <Routes>
             {/* admin */}
              <Route path="/" element={<Login />}/>
              <Route path="/admin/" element={(<AdminHomepage />)}/>
              <Route path="/admin/users" element={(<Users />)}/>
              <Route path="/admin/courses" element={<Courses/>}/>
              <Route path="/admin/sections" element={<Sections/>}/>
              <Route path="/admin/enroll" element={<Enroll/>}/>
              <Route path="/admin/changePassword" element={<ChangePassword/>}/>
              <Route path="/admin/announcements" element={<Announcements/>}/>
              <Route path="/admin/help" element={<AdminHelp/>}/>
              {/* student */}
              <Route path="/student/" element={<StudentHomepage/>}/>
              <Route path="/student/announcements" element={<StudentAnnouncements/>}/>
              <Route path="/student/accountDetails" element={<StudentAccountDetails/>}/>
              <Route path="/student/courses" element={<StudentCourses/>}/>
              <Route path="/student/course/overview" element={<StudentCourseOverview/>}/>
              <Route path="/students/resources" element={<StudentResources/>}/>
              <Route path="/students/quizzes" element={<StudentQuizzes/>}/>
              <Route path="/students/assignments" element={<StudentAssignments/>}/>
              <Route path="/students/assignment/submit" element={<StudentAssignmentSubmissionTab/>}/>
              {/* teacher */}
              <Route path="/teacher/" element={<TeacherHomepage/>}/>
              <Route path="/teacher/changepassword" element={<TeacherChangePassword/>}/>
              <Route path="/teacher/courses" element={<TeacherCourses/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
