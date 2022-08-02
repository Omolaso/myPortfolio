import React from 'react';
import '../styles/Contact.css';
import me from '../images/me.jpg'

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className="contact">
          <h1>Get in touch</h1>
          <img src={me} alt="me" id='img' />
          <div className="links">
            <a href="https://github.com/omolaso" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a href="mailto:adextee001@gmail.com"> Mail </a>
            <a href="tel:+2348143161117"> Phone </a>
          </div>
          <a href="/docs.google.com/document/d/1Up2hVMiyo9krdIYR_YQpzQOYKsR4THrlYX6eAhA_hXY" 
          download="Tobi Adesanya's Resume"><button className="btn">Download Resume</button></a>
        </div>
    </div>
  )
}

export default Contact