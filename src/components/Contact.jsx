import React from 'react';
import '../styles/Contact.css';
import me from '../images/me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className="contact">
          <h1>Get in touch</h1>
          <img src={me} alt="me" id='img' />
          <div className="links">

            <a href="https://github.com/omolaso" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon id='github' icon={faGithub}/>
            </a>
           
            <a href="https://linkedin.com/in/adesanya-oluwatobiloba-b131991b0" target="_blank" rel="noopener noreferrer"> 
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
            <a href="https://drive.google.com/file/d/1N_MkNAuaAaG3mgrTzphvIOCkihPkVi0z/view?usp=sharing" target="_blank"
              rel="noopener noreferrer">
              <button className="btn">Download Resume</button>
            </a>
          </div>

        </div>

         
    </div>
  )
}

export default Contact