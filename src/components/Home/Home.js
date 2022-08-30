import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

//<Home> holds the main structure
//<Outlet> component in <Home> is replaced by <Gameplay> or <Stats> component, depending on the Route you are on
//<Nav> and <Footer> are fixed and won't change no matter on what page you are on

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