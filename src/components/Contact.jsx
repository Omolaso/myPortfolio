import React from 'react';
import '../styles/Contact.css';
// import me from '../images/me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div id='contact' className='border'>
        <div className="">
          <header>
            <h1 className='text-3xl text-lightGrey font-bold mb-2'><span className='text-lightGreen text-xl mr-2'>03.</span> Will like to say hello?</h1>
          </header>
          <h2>Get in touch</h2>
          {/* <img src={me} alt="me" id='img' /> */}
          <div className="links">

            <a href="https://github.com/omolaso" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon id='github' icon={faGithub}/>
            </a>
           
            <a href="https://linkedin.com/in/adesanyaoluwatobiloba/" target="_blank" rel="noopener noreferrer"> 
              <FontAwesomeIcon id='linkedin' icon={faLinkedin}/> 
            </a>

            <a href="https://twitter.com/omolasofrancis" target="_blank" rel="noopener noreferrer"> 
              <FontAwesomeIcon id='twitter' icon={faTwitter}/> 
            </a>

            <a href="mailto:adextee001@gmail.com" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon id='mail' icon={faEnvelope}/>
            </a>
          </div>

          <div className="download">
            <a href="https://drive.google.com/file/d/1XLGTFc-7hCA1IF97vLYhOdAIvwmNok2J/view?usp=sharing" target="_blank"
              rel="noopener noreferrer">
              <button className="btn">Download Resume</button>
            </a>
          </div>
          
          <button>
            <a href="#home"  
              id="resume-btn"
              className='border border-lightGreen py-2 px-3 rounded-md text-lightGreen hover:bg-opacity-80'>
              ↑
            </a>
          </button>
        </div>

         
    </div>
  )
}

export default Contact