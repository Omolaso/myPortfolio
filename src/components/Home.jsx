import React from 'react';
// import me from '../images/me.jpg';
import '../styles/Home.css';
// import { useNavigate } from 'react-router-dom';
// import { handleHamburgerToggle } from '../redux-slice/HamburgerSlice';
// import { useSelector } from 'react-redux';

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
      <div>
        <section className="text-center md:text-left">
          <h3 id='home-h3' className='text-lg text-veryLightGrey font-medium' > Hi, my name is</h3>
          <h1 id='home-h1' className='text-4xl md:text-7xl mt-6 font-bold text-lightGrey'>Tobi Adesanya.</h1>
          <h2 id='home-h2' className='text-4xl md:text-7xl mt-3 font-bold text-deepGrey'> I build things for the web.</h2>
          <p id='home-para1' className='text-lg mt-6 text-deepGrey font-medium'> I am a frontend engineer and I enjoy creating responsive and adequate frontend products. <br /> 
              Being a critical thinker, I love solving problems. I am passionate about learning, I am versatile and trying out new techs gives me thrills.</p>
               {/* <p> I&apos;m not familiar with.</p> */}

          <div className="mt-4">
            <a href="#projects">
              <button id="resume-btn" className='border font-medium  border-lightGreen py-3 px-10 rounded-md text-lightGreen hover:bg-opacity-80'>
                Check out my projects
              </button>
            </a>
          </div>
        </section>
      
      </div>
    </>
  )
}

export default Home