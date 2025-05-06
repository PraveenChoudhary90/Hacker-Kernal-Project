import React from 'react'
import TopNav from './component/TopNav'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'

function Layout() {
  return (
    <>
    <TopNav/>
    <main style={{margin:"50px"}}>
        <Outlet/>
    </main>
    <Footer/>
    
    </>
  )
}

export default Layout