import { Link } from "react-router-dom";
import React, { useState } from "react";
import '../styles/Sidebar.css'

const SideBar = () => {  
    const [sidebar, showSidebar] = useState(false);

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
              <div className={sidebar ? "hamburger-div" : "hamburger-div-hover"} onClick={handleSidebar}>
                <span className="hamburger-span"></span>
                <span className="hamburger-span"></span>
                <span  className="hamburger-span"></span>
              </div>
            </div>

            <nav className={sidebar ? 'sidebar-active' : 'sidebar'} onClick={removeSidebar}>
              <ul className='text-lightGrey text-xl transition-all'>
                <li className="mt-3"> <a href='#about' className='hover:text-lightGreen hover:transition ease-in-out'> About </a> </li>
                <li className="mt-3"> <a href='#projects' className='hover:text-lightGreen hover:transition ease-in-out'> Projects </a> </li>
                <li className="mt-3"> <a href='#contact' className='hover:text-lightGreen hover:transition ease-in-out' > Contact Me</a> </li>
                <li className="mt-3"> 
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