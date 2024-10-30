import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../componentsda/Home'
import AttendanceRegister from '../componentsda/AttendanceRegister'
import Courses from '../componentsda/Courses'
import Feedback from '../componentsda/Feedback'


import Login from '../componentsda/Login'

const NavRouts = () => {
  return (
    <Routes >
      <Route path="/" element={<Home />}></Route>
      <Route path="/Attendance-register" element={<AttendanceRegister/>}></Route>
      
      <Route path="/Courses" element={<Courses />}></Route>
      <Route path="/Login" element={<Login/>}></Route>

      <Route path="/Feedback" element={<Feedback/>}></Route>
    </Routes>
  )
}

export default NavRouts
