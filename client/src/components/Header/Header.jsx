import React from 'react';
import Navbar from "../Navbar/Navbar";
import Searchform from "../Searchform/Searchform";
import "./Header.css";

const Header = () => {
    return(
        <div className='holder'>
            <Navbar/>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find Your Book Of Choice</h2><br/>
                <p className='header-text fs-18 fw-3'>The worth of book is to be measured by what you can carry away 
                from it</p>
                <Searchform/>
            </div>
        </div>
    )
}
export default Header