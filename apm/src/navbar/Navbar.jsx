import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <React.Fragment>
       <div className="container-fluid">
       <nav className='navbar navbar-expand-lg bg-dark'>
            <div className='navbar-brand text-white'> Apartment Management </div>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-link text-white'> <Link to="./home" className='nav-item'> Home</Link></li>
                    <li className='nav-link text-white'> <Link to="./about" className='nav-item'> About</Link></li>
                    <li className='nav-link text-white'> <Link to="./login" className='nav-item'> Login</Link></li>
                </ul>

            </div>

        </nav>
        </div>
        </React.Fragment>)
        }
        export default Navbar