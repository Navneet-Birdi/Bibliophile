import React from 'react';
import Navbar from "../Navbar/Navbar";
import Searchform from "../Searchform/Searchform";
//import "./Header.css";
import backgroundImg from '../../images/library-img.jpg'
const Header = () => {
    return(
        <div className='holder'>
            <Navbar/>
            <div className='header-content flex flex-c text-center text-white' style={{ 
      backgroundImage: `url(${backgroundImg})` 
    }}>
                <h2 className='header-title'>Find Your Book Of Choice</h2><br/>
                <p className='header-text'>The worth of book is to be measured by what you can carry away 
                from it</p>
                <Searchform/>
            </div>
        </div>
    )
}
export default Header