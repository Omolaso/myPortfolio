import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeSideBar } from '../redux-slice/HamburgerSlice';
import '../styles/Sidebar.css'


const SideBar = () => {  
    
    const [ sidebar, showSidebar ] = useState(false);

    const handleSidebar = () => {
      showSidebar(!sidebar)  
    }

    const removeSidebar = () => {
      showSidebar(false)
    }

      window.addEventListener('resize', removeSidebar);
      window.addEventListener('scroll', removeSidebar);

  
    return (
        <>
            <div className="flex items-center justify-between">
              <h1 className="text-lightGrey font-bold text-xl" onClick={() => window.location.reload()}> <Link to='/'> Adextee </Link>  </h1>
              <div className="block md:hidden">
                <FontAwesomeIcon icon={ faBars } onClick={handleSidebar} id='bars' className={ sidebar ? 'menuOpen-active' : 'menuOpen'}/>
                <FontAwesomeIcon icon={ faClose } onClick={removeSidebar} id='bars' className={ sidebar ? 'menuClose-active' : 'menuClose'}/>
              </div>
            </div>

            <nav className={sidebar ? 'sidebar-active' : 'sidebar'} onClick={handleSidebar}>
              {/* <div>
                <Link to='#'>
                  <FontAwesomeIcon icon={faClose} className='text-lightGreen text-xl hover:opacity-80'/>
                </Link>
              </div> */}
              <ul className='text-lightGrey text-xl'>
                <li id="nav-list"> <a href='#about' className='hover:text-lightGreen hover:transition ease-in-out'> About </a> </li>
                <li id="nav-list"> <a href='#projects' className='hover:text-lightGreen hover:transition ease-in-out'> Projects </a> </li>
                <li id="nav-list"> <a href='#contact' className='hover:text-lightGreen hover:transition ease-in-out' > Contact Me</a> </li>
                <li id="nav-list"> 
                  <a href="https://drive.google.com/file/d/1r04q2Ba3BRegQTRqJqfcjXc9sB3kRdTj/view?usp=sharing" target="_blank"
                    rel="noopener noreferrer">
                    <button 
                      id="resume-btn"
                      className='border border-lightGreen py-2 px-3 rounded-md text-lightGreen'>
                        Resume 
                   </button>
                  </a>
                </li>
              </ul>
            </nav>


            

          </>
    )
}

export default SideBar