import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import Login from './pages/misc/Login/Login.js'
import ChangePassword from './pages/admin/changePassword/changePassword';
import CreateCourse from './pages/admin/createCourse/createCourse';
import Enroll from './pages/admin/enroll/enroll'
import Courses from './pages/student/courses/courses'


function App() {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/admin" element={<Login />}/>
              <Route path="/admin/changepassword" element={<ChangePassword />}/>
              <Route path="/admin/createcourse" element={<CreateCourse/>}/>
              <Route path="/admin/enroll" element={<Enroll/>}/>
              <Route path="/student/courses" element={<Courses/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
