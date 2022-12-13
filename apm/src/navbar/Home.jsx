import Nav from 'react-bootstrap/Nav';
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <React.Fragment>
       <div className="container-fluid">
       <Nav className='navbar navbar-expand-lg bg-dark'>
            <div className='navbar-brand text-white'> Apartment Management </div>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-link text-white'> <Link to="./home" className='nav-item'> Home</Link></li>
                    <li className='nav-link text-white'> <Link to="./about" className='nav-item'> About</Link></li>
                    <li className='nav-link text-white'> <Link to="./login" className='nav-item'> Login</Link></li>
                </ul>

            </div>

        </Nav>
        <div className="container-fluid"  style={{ 
  backgroundImage: `url(${'https://t4.ftcdn.net/jpg/03/83/84/49/240_F_383844937_VVv0WYa8qmKZZNfTS3P6dwnIeAzQRg3n.jpg'})` 
  , height:'100vh',
  marginTop:'',
  fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>

        </div>
       </div>
    </React.Fragment>
  )
}

export default Home