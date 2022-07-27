import React from 'react';
import { Outlet } from 'react-router-dom'
import Navs from './Navs';


const SharedLayout = () => {
  return (
    <>
      <Navs/>
      
      <section>
        <Outlet/>
      </section>
    </>
  )
}

export default SharedLayout