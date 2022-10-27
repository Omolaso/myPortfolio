import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <div className=''>
      <footer>

        <section className='flex w-full max-w-xs mx-auto items-center justify-around'>
          <a href="https://www.github.com/omolaso" target="_blank" rel="noopener noreferrer"> 
            <FontAwesomeIcon icon={faGithub} title='GitHub' className='text-xl text-lightGrey hover:text-lightGreen'/>
          </a>

          <a href="https://www.twitter.com/omolasofrancis" target="_blank" rel="noopener noreferrer"> 
            <FontAwesomeIcon icon={faTwitter} title='Twitter' className='text-xl text-lightGrey hover:text-lightGreen'/>
          </a>

          <a href="https://linkedin.com/in/adesanyaoluwatobiloba/" target="_blank" rel="noopener noreferrer"> 
            <FontAwesomeIcon id='linkedin' title='LinkedIn' icon={faLinkedin} className='text-xl text-lightGrey hover:text-lightGreen'/> 
          </a>
        </section>

        <section className='w-full text-center mt-4 max-w-xs mx-auto'>
          <a href='https://www.github.com/omolaso/myPortfolio'
              target="_blank" 
              rel="noopener noreferrer"
              className='text-sm text-lightGrey hover:text-lightGreen'
            >
              Built by Tobi Adesanya
            </a>
        </section>

        <section className='absolute left-0 right-3 text-right'>
          <a href="#home" 
            // id="resume-btn"
            title='Up'
            // className='border-lightGreen rounded-md text-lightGreen border'
          >
            <FontAwesomeIcon icon={faChevronUp} id='go-up' className="text-3xl text-lightGreen"/>
          </a>
       </section>

      </footer>
    </div>
  )
}

export default Footer