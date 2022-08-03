import React from 'react';
import '../styles/Nav.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { handleHamburgerToggle } from '../redux-slice/HamburgerSlice';
import { useDispatch } from 'react-redux';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../components/Sidebar';


const Navs = () => {
  const dispatch = useDispatch();
  function handleHamburger(){
    dispatch(handleHamburgerToggle())
  }

  return (
    <div className='container'>
        <header className='nav-container'>
            <div className="logo">
                <h3><Link to='/' id='link' className="h-logo"> Tobi Adesanya </Link></h3>
                <div className='mobile'>
                  <FontAwesomeIcon id='react' icon={faReact}/>
                  <div className="hamburger" onClick={ handleHamburger }>
                    <FontAwesomeIcon icon={ faBars } id='bars'/>
                  </div>
                </div>
            </div>
            <ul className='nav-links'>
                <li> <Link to='/Home' id='link'> Home </Link> </li>
                <li> <Link to='/About' id='link'> About </Link> </li>
                <li> <Link to='/Projects' id='link'> My Projects </Link> </li>
                <li> <Link to='/Contact' id='link'> Contact Me</Link> </li>
            </ul>
        </header>
        <SideBar/>
    </div>
  )
}

export default Navs