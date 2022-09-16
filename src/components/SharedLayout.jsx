import React from 'react';
import '../styles/SharedLayout.css';
// import { Outlet } from 'react-router-dom'
import Navs from './Navs';
import Home from './Home';
import About from './About';


const SharedLayout = () => {
  return (
    <div className='min-h-screen bg-black py-4'>

     <section className='px-8'>
        <Navs/>
     </section>

      <main className='px-12 md:px-32 md:mt-12'>

        <section className='mt-20 mb-44'>
          <Home/>
        </section>

        <section className='my-24'>
          <About/>
        </section>

      </main>
      




      {/* <section>
        <Outlet/>
      </section> */}
    </div>
  )
}

export default SharedLayout