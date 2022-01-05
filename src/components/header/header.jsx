import react from "react";
import { useState } from "react";
import Dropdown from "./dropDown";
import './header.css'
import Dropdown2 from "./dropDown2"
import "./button.css"
import React from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";



const Header = () => { 

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };


  const auth = useAuth();
  const history = useHistory();

  const onLogOut = () => {
    auth.logOut();
    history.push("/login");
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
          logo
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'
         
          >
            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
         
          <li className='nav-item'>
            <Link
              to='/tours/:toursId'
              className='nav-links'
              onClick={closeMobileMenu}>
              Tours 
            </Link>
            
          </li>
          <li className='nav-item'>
            <Link
              to='/blog'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li>
          <li  className='nav-item'
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}
              >
            <Link
              to='#'
              className='nav-links'
              onClick={closeMobileMenu} >
              Kyrgyzstan <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}

            
          </li>
          <li className='nav-item'
           onMouseEnter={onMouseEnter2}
           onMouseLeave={onMouseLeave2} 
            >
            <Link
              to='#'
              className='nav-links'
              onClick={closeMobileMenu}>
              About <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {auth.isLoaded &&
          (auth.user ? (
            <> 
            <Link to="/profile">
              <button className='btn12'   >
                {auth.user.firstName} {auth.user.lastName}
              </button>
              </Link>
            
              <button   className='btn12'  onClick={onLogOut}>
                Log out
              </button>
             
            </>
          ) : ( 
            <>
              <Link to="/login">
              <button  className='btn12'>
                Login
              </button>
              </Link>
              <Link to="/registration">
              <button   className='btn12'  >
                Registration
              </button>
              </Link>
            </>
          ))}
      </nav>
    </>
  );
     
}

export default Header;