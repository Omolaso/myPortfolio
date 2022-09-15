import React from 'react';
// import { Outlet } from 'react-router-dom'
import Navs from './Navs';
// import Home from './Home'


const SharedLayout = () => {
  return (
    <div className='min-h-screen bg-black px-8 py-4'>
      <Navs/>
      {/* <Home/> */}





      {/* <section>
        <Outlet/>
      </section> */}
    </div>
  )
}

export default SharedLayout