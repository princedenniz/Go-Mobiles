import React from 'react'
import { Link } from 'react-router-dom'
import "./Body.css"
import Background from "../assets/pizz.jpg"
import {BsArrowRightCircleFill} from "react-icons/bs"

const Body = () => {
  return (
    <div>
      <div className='body-container' style={{backgroundImage: `url(${Background})`}}>

        <h1><a href="#"  className='download'>Download! </a></h1>

        <div className='arrow-btn'>
          <Link to={"/Sub"}>
        <BsArrowRightCircleFill className='arrow'/>

          </Link>
        </div>
     
      </div>
    </div>
  )
}

export default Body
