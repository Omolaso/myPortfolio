import * as React from 'react';
import '../styles/SharedLayout.css';
// import { Outlet } from 'react-router-dom'
// import { Routes, Route } from 'react-router-dom';
import Navs from './Navs';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';



const SharedLayout = () => {
  return (
    <div className='min-h-screen bg-black pb-8'>

   
        <section className='px-8'>
            <Navs/>
        </section>

        <main className='px-12 md:px-32 md:mt-12'>

          
          <section className='mt-20 mb-40'>
          <Home/>
          </section>

          <section className='my-24'>
            <About/>
          </section>

          <section className='my-30'>
            <Projects/>
          </section>

          <section className='my-20'>
            <Contact/>
          </section>


          <section className='my-2'>
            <Footer/>
          </section>
          
        </main>
      
    </div>
  )
}

export default SharedLayout