import React from 'react';
// import me from '../images/me.jpg';
import '../styles/Home.css';
// import { useNavigate } from 'react-router-dom';
// import { handleHamburgerToggle } from '../redux-slice/HamburgerSlice';
// import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

// FRAMER MOTION

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.3,
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

// FRAMER MOTION



const Home = () => {
//  const { isHamActive } = useSelector((store) => store.hamburger)


  // navigate

  // const navigate = useNavigate()
  // const hire = () => {
  //   navigate('/Contact')
  // };
  // const about = () => {
  //   navigate('/About')
  // };

    // navigate ends

  return (
    <>
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center md:text-left"
        >
        <motion.h3 variants={item} id='home-h3' className='text-lg text-veryLightGrey font-medium' > Hi, my name is</motion.h3>
        <motion.h1 variants={item} id='home-h1' className='text-4xl md:text-7xl mt-6 font-bold text-lightGrey'>Tobi Adesanya.</motion.h1>
        <motion.h2 variants={item} id='home-h2' className='text-4xl md:text-7xl mt-3 font-bold text-deepGrey'> I build things for the web.</motion.h2>
        <motion.p variants={item} id='home-para1' className='text-lg mt-6 text-deepGrey font-medium'> I am a frontend engineer and I enjoy creating responsive and adequate frontend products. <br /> 
            Being a critical thinker, I love solving problems. I am passionate about learning and trying out new techs gives me thrills.</motion.p>
             {/* <p> I&apos;m not familiar with.</p> */}

        <motion.div variants={item} className="mt-4">
          <a href="#projects">
            <button id="resume-btn" className='border font-medium  border-lightGreen py-3 px-10 rounded-md text-lightGreen hover:bg-opacity-80'>
              Check out my projects
            </button>
          </a>
        </motion.div>
      </motion.section>
    </>
  )
}

export default Home