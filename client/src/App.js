import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import Login from './pages/Login/Login.js'
import Navbar from './components/Navbar/Navbar';
import Homebar from './components/Homebar/Homebar';

function App() {
  return (
    <div>
      <Router>
          <Routes>
              <Route path="/" element={<Homebar />}/>
              <Route path="/login" element={<Login />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
