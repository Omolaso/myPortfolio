// import { useEffect } from 'react';
import { Link } from "react-router-dom";
// import { elastic as Menu } from "react-burger-menu";
// import { stack as Menu } from "react-burger-menu";
// import { bubble as Menu } from "react-burger-menu";
// import { slide as Menu } from "react-burger-menu";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
// import { faClose } from '@fortawesome/free-solid-svg-icons';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeSideBar } from '../redux-slice/HamburgerSlice';
import '../styles/Sidebar.css'
// import { Fab } from "@mui/material";
// import menu from '../images/menu.png'

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
            {/* <Menu  */}
              {/* pageWrapId={ "page-wrap" } 
              outerContainerId={ "outer-container" }
              disableCloseOnEsc
              left
              itemListElement="div"
              disableAutoFocus
              // isOpen = {false}
              onOpen={ handleStateChange }
              
             
              // className='flex-col items-center justify-center min-h-screen'
            > */}

              {/* <ul className='text-lightGrey text-xl overflow-auto' id="page-wrap">
                  <li id="nav-list"> <a href='#about' className='hover:text-lightGreen hover:transition ease-in-out'> About </a> </li>
                  <li id="nav-list"> <a href='#projects' className='hover:text-lightGreen hover:transition ease-in-out'> My Projects </a> </li>
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
              </ul> */}
            {/* </Menu> */}

            {/* LIBRARY ENDS */}



            <div className="flex items-center justify-between cursor-pointer">
              <h1 className="text-lightGrey font-extrabold"> <Link to='/'> Tobi Adesanya </Link>  </h1>
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