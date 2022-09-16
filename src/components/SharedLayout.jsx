import React from 'react';
// import { Outlet } from 'react-router-dom'
import Navs from './Navs';
import Home from './Home'


const SharedLayout = () => {
  return (
    <div className='min-h-screen bg-black py-4'>

     <section className='px-8'>
        <Navs/>
     </section>

      <main className=' px-12 md:px-32 md:mt-12'>

        <section className='my-10'>
          <Home/>
        </section>

      </main>
      




      {/* <section>
        <Outlet/>
      </section> */}
    </div>
  )
}

export default SharedLayout