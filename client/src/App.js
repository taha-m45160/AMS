import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import Login from './pages/misc/Login/Login.js'
import ChangePassword from './pages/admin/changePassword/changePassword';
import CreateCourse from './pages/admin/createCourse/createCourse';
import Enroll from './pages/admin/enroll/enroll'


function App() {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/login" element={<Login />}/>
              <Route path="/changepassword" element={<ChangePassword />}/>
              <Route path="/createcourse" element={<CreateCourse/>}/>
              <Route path="/enroll" element={<Enroll/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
