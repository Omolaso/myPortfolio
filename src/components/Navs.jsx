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
    <div id='home' className='pt-4'>
      <header className='flex items-center justify-between'>
          <div className="cursor-pointer">
              <h1 className="text-lightGrey font-extrabold"> <Link to='/'> Tobi Adesanya </Link>  </h1>
                {/* <div className=''>
                  <div><FontAwesomeIcon id='react' icon={faReact}/></div>
                  <div className="" onClick={ handleHamburger }>
                    <FontAwesomeIcon icon={ faBars } id='bars'/>
                  </div>
                </div> */}
          </div>
          <ul className='hidden md:flex items-center justify-between flex-auto max-w-xl text-lightGrey text-sm font-medium'>
              {/* <li> <a href='#home' className='hover:text-lightGreen hover:transition ease-in-out'> Home </a> </li> */}
              <li> <a href='#about' className='hover:text-lightGreen hover:transition ease-in-out'> About </a> </li>
              <li> <a href='#projects' className='hover:text-lightGreen hover:transition ease-in-out'> Work </a> </li>
              <li> <a href='#contact' className='hover:text-lightGreen hover:transition ease-in-out' > Contact Me</a> </li>
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