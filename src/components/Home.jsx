import React from 'react';
import me from '../images/me.jpg';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
// import { handleHamburgerToggle } from '../redux-slice/HamburgerSlice';
// import { useSelector } from 'react-redux';

const Home = () => {
//  const { isHamActive } = useSelector((store) => store.hamburger)


  // navigate

  const navigate = useNavigate()
  const hire = () => {
    navigate('/Contact')
  };
  const about = () => {
    navigate('/About')
  };

    // navigate ends

  return (
    <>
      {/* <div className={`home-container ${isHamActive ? "home-container-toggle" : " "} `}> */}
      <div className="">
        <section className="text-left">
          <h3 id='home-h3' className='text-lg text-veryLightGrey font-medium' > Hi, my name is</h3>
          <h1 id='home-h1' className='text-4xl md:text-7xl mt-6 font-bold text-lightGrey'>Tobi Adesanya.</h1>
          <h2 id='home-h2' className='text-4xl md:text-7xl mt-3 font-bold text-deepGrey'> I build things for the web.</h2>
          <p id='home-para1' className='text-lg mt-6 text-deepGrey'> I enjoy creating responsive and adequate front-end products. <br /> 
              As a critical thinker, I love solving problems and trying out new techs.
               I am curious, versatile, passionate about learning and I love to try new techs.</p>
               {/* <p> I&apos;m not familiar with.</p> */}

          <div className="mt-4">
            <button onClick={about} className='border border-lightGreen mr-4 py-2 px-3 rounded-md text-lightGreen hover:bg-opacity-80'>Learn More</button>
            <button onClick={hire} className='border border-lightGreen py-2 px-3 rounded-md text-lightGreen hover:bg-opacity-80'>Hire Me</button>
          </div>
        </section>
{/* 
        <section className="">
          <img 
            className="" 
            src={me} 
            alt="my_image" />
        </section> */}
      </div>
    </>
  )
}

export default Home