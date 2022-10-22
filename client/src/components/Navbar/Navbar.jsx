import React, {useState} from 'react'
import {Link} from 'react-router-dom';

//import "./Navbar.css";
//import 'semantic-ui-css/semantic.min.css'
import logoImg from "../../images/logo.png";




const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo"/>
            <span className='text'>Bibliophile</span>
          </Link>
          
        </div>
        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" className='navlink'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "login" className='navlink'>Login</Link>
            </li>
            <li className='nav-item'>
              <Link to = "signup" className='navlink'>Signup</Link>
            </li>
          </ul>

        </div>
      </div>

    </nav>
  )
}

export default Navbar