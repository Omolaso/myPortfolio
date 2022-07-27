import React from 'react';
import '../styles/Nav.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons'

const Navs = () => {
  return (
    <div className='container'>
        <header className='nav-container'>
            <div className="logo">
                <h3> <FontAwesomeIcon id='faFile' icon={faFile}/> <Link to='/' id='link'> My Portfolio </Link></h3>
            </div>
            <ul className='nav-links'>
                <li> <Link to='/Home' id='link'> Home </Link> </li>
                <li> <Link to='/Projects' id='link'> Projects </Link> </li>
                <li> <Link to='/About' id='link'> About </Link> </li>
                <li> <Link to='/Contact' id='link'> Contact </Link> </li>
            </ul>
        </header>
    </div>
  )
}

export default Navs