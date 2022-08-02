import React from 'react';
import me from '../images/me.jpg';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const hire = () => {
    navigate('/Contact')
  };
  const about = () => {
    navigate('/About')
  };

  return (
    <>
      <div className="home-container">
        <section className='text'>
          <h1> Hi, I'm <span>Tobi</span>.</h1>
          <h2>A FRONTEND DEVELOPER</h2>
          <p> I enjoy building responsive and adequate front-end products. <br/>
            I am curious, versatile, passionate about learning and I love to try new techs I<span>&#39;</span>m not familiar with.
          </p>
          <div className='hire-btn'>
            <button onClick={about} className='learn'>Learn More</button>
            <button onClick={hire} className='hire'>Hire Me</button>
          </div>
        </section>
        <section className='image1'>
          <img id='img' src={me} alt="my_image" />
        </section>
      </div>
    </>
  )
}

export default Home