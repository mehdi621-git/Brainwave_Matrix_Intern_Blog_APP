import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { Context } from '../context'
// import Footer from './Footer'

const Layout = () => {
  const {isAuthenticated} =useContext(Context)
  return (
    <div>
       {isAuthenticated ? <Navbar></Navbar> : ''}
        <div>
            <Outlet/>
        </div>
        {/* <Footer></Footer> */}
    </div>
  )
}

export default Layout