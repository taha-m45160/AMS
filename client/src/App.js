import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import Login from './pages/misc/Login/Login.js'
import Navbar from './components/Navbar/Navbar';
import ChangePassword from './pages/admin/changePassword/changePassword';


function App() {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/login" element={<Login />}/>
              <Route path="/changepassword" element={<ChangePassword />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
