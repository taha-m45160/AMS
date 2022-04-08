import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import Login from './pages/misc/Login/Login.js'
import ChangePassword from './pages/admin/changePassword/changePassword';
import CreateCourse from './pages/admin/createCourse/createCourse';


function App() {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/login" element={<Login />}/>
              <Route path="/changepassword" element={<ChangePassword />}/>
              <Route path="/createcourse" element={<CreateCourse/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
