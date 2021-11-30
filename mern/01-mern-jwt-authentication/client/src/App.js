import React from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {
    return (
      <Router>
        <div className="app" >
         <Routes>
             <Route path="/" element={<Login/>} />
             <Route path="/home" element={<Home/>} />
         </Routes>
        </div>
      </Router>
    );
}

export default App
