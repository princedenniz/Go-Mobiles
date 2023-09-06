import React from 'react'
import "./NavPage.css"
import Body from '../Body/Body'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const NavPage = () => {
  return (
    <div>
      <nav className='home-nav'>
      <div className='logo'>
        <h3> <Link to={"/"}>GoMobilez</Link> </h3>
      </div>
      </nav>

      <Body/>
      <Footer/>
  
    </div>
  )
}

export default NavPage
