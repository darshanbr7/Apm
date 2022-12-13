import React from 'react'
import Home from './navbar/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import About from './navbar/About'
import Login from './navbar/Login'

const App = () => {
  return (
  <>
    <Router>
      <Home />
      <Routes>
      <Route path='/' element={<Home/> }/>
      <Route path='/about' element={<About/> }/>
      <Route path='/login' element={<Login/> }/>
      </Routes>

    </Router>
   </>
  )
}

export default App