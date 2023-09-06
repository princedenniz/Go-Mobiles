import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
       <nav className='home-nav'>
      <div className='logo'>
        <h3> <Link to={"/"}>GoMobilez</Link> </h3>
      </div>
      </nav>
    </div>
  )
}

export default Nav
