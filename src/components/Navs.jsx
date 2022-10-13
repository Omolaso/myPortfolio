import React from 'react';
// import '../styles/Nav.css'
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact } from '@fortawesome/free-brands-svg-icons';
// import { handleHamburgerToggle } from '../redux-slice/HamburgerSlice';
// import { useDispatch } from 'react-redux';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideBar from '../components/Sidebar';
import { motion } from 'framer-motion';

// FRAMER MOTION

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
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



const Navs = () => {
  // const dispatch = useDispatch();
  // function handleHamburger(){
  //   dispatch(handleHamburgerToggle())
  // }



  return (
    <div id='home' className='py-4'>
      <header className='flex items-center justify-between'>
          <motion.div   
            variants={container}
            initial="hidden"
            animate="visible"
            className="hidden md:block cursor-pointer">
              <motion.h1 variants={headerItem} className="text-lightGrey font-bold text-xl" onClick={() => window.location.reload()}> <Link to='/'> Adextee </Link>  </motion.h1>
              {/* <div className="block md:hidden">
                <FontAwesomeIcon icon={ faBars } id='bars' className='text-lightGreen text-3xl hover:opacity-80'/>
              </div> */}
          </motion.div>

          
          <div className='block md:hidden w-full'>
            <SideBar/>
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
    </div>
  )
}

export default Navs