import React, {useState} from 'react';
import '../styles/SharedLayout.css';
import Navs from './Navs';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';



const SharedLayout = () => {
  const [sidebar, showSidebar] = useState(false);


  return (
    <div className='min-h-screen bg-black pb-8 '>

   
        <section className='py-6 px-8 md:px-12 mb-12'>
            <Navs sidebar={sidebar} showSidebar={showSidebar}/>
        </section>

        <main className={sidebar ? 'blur-lg md:mt-[50px] px-12 transition-[all]' : 'md:mt-[50px] px-12'}>

          <section className='min-h-screen flex items-start justify-center md:justify-start'>
            <Home/>
          </section>

          <section className='min-h-screen'>
            <About/>
          </section>

          <section>
            <Projects/>
          </section>

          <section className='mb-12'>
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