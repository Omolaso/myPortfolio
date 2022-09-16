import React from 'react';
// import '../styles/Nav.css'
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact } from '@fortawesome/free-brands-svg-icons';
// import { handleHamburgerToggle } from '../redux-slice/HamburgerSlice';
// import { useDispatch } from 'react-redux';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../components/Sidebar';


const Navs = () => {
  // const dispatch = useDispatch();
  // function handleHamburger(){
  //   dispatch(handleHamburgerToggle())
  // }

  return (
    <div id='wrapper'>
        <header className='flex items-center justify-between'>
            <div className=" flex-1">
                <h3><Link to='/' className="text-white"> T </Link></h3>
                <div className=''>
                  {/* <div><FontAwesomeIcon id='react' icon={faReact}/></div> */}
                  {/* <div className="" onClick={ handleHamburger }>
                    <FontAwesomeIcon icon={ faBars } id='bars'/>
                  </div> */}
                </div>
            </div>
            <ul className='hidden md:flex items-center justify-between flex-auto w-20 text-lightGrey text-sm font-medium'>
                <li> <Link to='/Home' className='hover:text-lightGreen hover:transition ease-in-out'> Home </Link> </li>
                <li> <Link to='/About' className='hover:text-lightGreen hover:transition ease-in-out'> About </Link> </li>
                <li> <Link to='/Projects' className='hover:text-lightGreen hover:transition ease-in-out'> My Projects </Link> </li>
                <li> <Link to='/Contact' className='hover:text-lightGreen hover:transition ease-in-out' > Contact Me</Link> </li>
                <li> 
                  <a href="https://drive.google.com/file/d/1XLGTFc-7hCA1IF97vLYhOdAIvwmNok2J/view?usp=sharing" target="_blank"
                     rel="noopener noreferrer">
                    <button
                      id="resume-btn"
                      className='border border-lightGreen py-2 px-3 rounded-md text-lightGreen hover:bg-opacity-80'>
                         Resume 
                    </button>
                  </a>
                </li>
            </ul>
        </header>
        <SideBar/>
    </div>
  )
}

export default Navs