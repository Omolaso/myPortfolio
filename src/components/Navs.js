import React from 'react';
// import { Link } from 'react-router-dom';
import SideBar from './Sidebar';
import { motion } from 'framer-motion';
import Logo from "../images/logo.png";

// FRAMER MOTION

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5, //all children
      staggerChildren: 0.2,  //each child
    }
  }
};

const item = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const headerItem = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

// FRAMER MOTION



const Navs = ({sidebar, showSidebar}) => {

  return (
    <main className='w-full'>
      <header className='flex items-center justify-between w-full'>
          <motion.div   
            variants={container}
            initial="hidden"
            animate="visible"
            className="hidden md:block cursor-pointer"
          >
            <motion.a href='/' variants={headerItem} className="">
              <img src={Logo} alt="logo" className="border-2 border-veryLightGrey rounded-[50%] w-[40px]"/>
            </motion.a>
          </motion.div>

           

          
          <div className='block md:hidden w-full'>
            <SideBar sidebar={sidebar} showSidebar={showSidebar}/>
          </div>

          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className='hidden md:flex items-center justify-between flex-auto max-w-lg text-lightGrey text-sm font-medium'
            >
              {/* <li> <a href='#home' className='hover:text-lightGreen hover:transition ease-in-out'> Home </a> </li> */}
              <motion.li variants={item}> <a href='#about' className='hover:text-lightGreen hover:transition ease-in-out'> About </a> </motion.li>
              <motion.li variants={item}> <a href='#projects' className='hover:text-lightGreen hover:transition ease-in-out'> Projects </a> </motion.li>
              <motion.li variants={item}> <a href='#contact' className='hover:text-lightGreen hover:transition ease-in-out' > Contact Me</a> </motion.li>
              <motion.li variants={item}> 
                <a href="https://drive.google.com/file/d/1r04q2Ba3BRegQTRqJqfcjXc9sB3kRdTj/view?usp=sharing" target="_blank"
                   rel="noopener noreferrer">
                  <button
                    id="resume-btn"
                    className='border border-lightGreen py-2 px-3 rounded-md text-lightGreen hover:bg-opacity-80'>
                      Resume 
                  </button>
                </a>
              </motion.li>
          </motion.ul>
      </header>
    </main>
  )
}

export default Navs