import React from 'react'
import Home from './navbar/Home'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Login from './navbar/Login'
import Navbar from './navbar/Navbar'
const App = () => {
  return (
  <React.Fragment>
   <Router>
  <Navbar />
   <Routes>
    <Route path='/' element={Navbar}/>
    <Route path='/Home' element={<Home />}/>
    <Route path='/login' element={<Login />}/>
   </Routes>
   </Router>
  </React.Fragment>
  )
}

export default App