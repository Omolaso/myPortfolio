import { Link } from "react-router-dom";
import React from "react";
import '../styles/Sidebar.css';
import Logo from "../images/logo.png";

const SideBar = ({sidebar, showSidebar}) => {  

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
          <header className="flex items-center justify-center w-full">
            <div className="flex items-center justify-between min-h-[10vh] w-full">
              <Link to='/'>
                <img src={Logo} alt="logo" className="border-2 border-veryLightGrey rounded-[50%] w-[40px]"/>
              </Link>
              <div className={sidebar ? "hamburger-div" : "hamburger-div-hover"} onClick={handleSidebar}>
                <span className="hamburger-span"></span>
                <span className="hamburger-span"></span>
                <span  className="hamburger-span"></span>
              </div>
            </div>
          </header>
            

          <nav className={sidebar ? 'sidebar-active' : 'side-bar'} onClick={removeSidebar}>
            <ul className='flex flex-col items-center justify-between h-[50vh] px-8 mb-8 text-lightGrey text-2xl transition-all'>
              <li className="mt-3"> <a href='#about' className='hover:text-lightGreen hover:transition ease-in-out'> About </a> </li>
              <li className="mt-3"> <a href='#projects' className='hover:text-lightGreen hover:transition ease-in-out'> Projects </a> </li>
              <li className="mt-3"> <a href='#contact' className='hover:text-lightGreen hover:transition ease-in-out' > Contact Me</a> </li>
              <li className="mt-3"> 
                <a href="https://drive.google.com/file/d/1r04q2Ba3BRegQTRqJqfcjXc9sB3kRdTj/view?usp=sharing" target="_blank"
                  rel="noopener noreferrer">
                  <button 
                    id="resume-btn"
                    className='border border-lightGreen py-4 px-8 rounded-md text-lightGreen'>
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