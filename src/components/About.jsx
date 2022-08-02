import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className='about-container'>
        <article className='text'>
          <h1>About Me</h1>
          <h3>Hi again!</h3>
          <p>I am  <strong><span>Tobi Adesanya</span></strong>, a Navigator turned Frontend Developer. </p>

          <p>I started my tech journey on the 28th of March, 2022. I enrolled into the Stutern 1.2 cohort with immensce enthusiam and vibe lol,
            I was extremely thrilled to have a new challenge.
          </p>

          <p>Prior to this, I was a Navigator, I studied Nautical Science at 
            Federal College of Fisheries and Marine Technology, Victoria Island, Lagos.
            I am a professional sailor that sails the sea! Yes, you can imagine it all. I mean, the sea turbulence,
            the rolling and pitching, the number of aquatic animals I've seen, the large mass of water, name it. It was adventurous.
          </p>

          <h3>Why did I switch?</h3>
          {/* <p>Well, its just to say I wanted a new challenge</p> */}
          <p>Well, at first, I had little or no idea about tech or coding. However, has time went on, I began to meet
            techies and have them as friends. They inspired me. I mean, they could easily make web pages and applications look
            astonishing by writing a few lines of code. I was mesmerized and wanted to try it too. I began to feel the huge
            to build web pages just by clicking my laptop's keyboards (so I thought) so I enrolled at Stutern and began then 
            I totally fell in love with it! I wanted to know more, thereby making research, and increasing my knowledge. It was
            extremely challenging at first but the joy of been able to build and solve technical problems motivated and still
            motivates me.</p>
        </article>
    </div>
  )
}

export default About