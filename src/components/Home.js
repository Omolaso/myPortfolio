import React from 'react';
import me from '../images/me.jpg';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <section className='text'>
          <h1> Hi! I'm Tobi Adesanya </h1>
          <p> I am a Software Engineer who finds pleasure in solving real life problems.
            I am curious, versatile, passionate about learning and I love to try new techs I’m not familiar with.</p>
        </section>
        <section className='image1'>
          <img id='img' src={me} alt="my image" />
        </section>
      </div>
    </>
  )
}

export default Home