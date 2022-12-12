import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <React.Fragment>
        <nav className='navbar navbar-expand-lg bg-dark'>
      <div className='navbar-brand text-white'> Apartment management</div>
<div className="ml-auto">
  <ul className='navbar-nav'>
    <li className='nav-link'> <Link className='nav-link text-white' to="/Home"> Home</Link></li>
    <li className='nav-link'> <Link className='nav-link text-white' to="/login"> Login</Link></li>

  </ul>
</div>

    </nav>
    </React.Fragment>
  )
}

export default Navbar