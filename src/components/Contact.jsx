import React from 'react';
import '../styles/Contact.css';




const Contact = () => {
  return (
    <div 
      id='contact' 
      className='py-20'
    >
          <header>
            <h1 className='text-xl text-center text-lightGreen font-bold mb-2'><span className='text-lightGreen text-xl mr-2'>03.</span> Will like to say hello?</h1>
          </header>

          <main className='text-center'>
            <h2 className='text-5xl md:text-7xl mt-6 font-bold text-lightGrey'>Get In Touch</h2>
            <a href="mailto:adextee001@gmail.com" id="resume-btn"
              className='border border-lightGreen py-4 px-5 font-medium rounded-md text-lightGreen'
            >
              <button className='mt-20'> Say Hello </button>
            </a>
          </main>

         
    </div>
  )
}

export default Contact