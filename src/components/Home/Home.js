import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

function Home() {
  return (
    <div className="container-app">
        <Nav />
        <Outlet />
        <Footer />
    </div>

  )
}

export default Home