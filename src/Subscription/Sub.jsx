import React, { useState } from 'react'
import Nav from '../Navigation/Nav'
import "./Sub.css"
import{ FaRegLightbulb} from "react-icons/fa"
import {GiHamburgerMenu, GiCancel} from "react-icons/gi"
import SubImage from "../assets/phonecall.jpg"

const Sub = () => {
  const [toggle, setToggle] = useState(false)

  const sunTexts = [
    {
      text1: ""
    }
  ]

  const handleToggle = ()=>{
    setToggle((toggle)=>!toggle)
  }
  return (
    <div className='sub-sec' style={{backgroundImage: `url(${SubImage})`} }>
    
      <Nav/>

      

      <div className='toggle' onClick={handleToggle}>
        {
          toggle ? <GiCancel className='toggle-icon'/> :  <GiHamburgerMenu className='toggle-icon'/>
        }
        
       
      </div>

      <div className='sub-text-container'>
      <div className='sub-text'>
        <h1>Get doings with GoMobiles</h1>
        <h1>Connct with Loved</h1>
        <h1>Ones</h1>
        <h3>Discover affordable plans and subscriptions tailored for seamless comminication with loved ones</h3>
      </div>
      {/* <div className='sub-text'>
        <h1>Get doings with GoMobiles</h1>
        <h1>Connct with Loved</h1>
        <h1>Ones</h1>
        <h3>Discover affordable plans and subscriptions tailored for seamless comminication with loved ones</h3>
      </div>
      <div className='sub-text'>
        <h1>Get doings with GoMobiles</h1>
        <h1>Connct with Loved</h1>
        <h1>Ones</h1>
        <h3>Discover affordable plans and subscriptions tailored for seamless comminication with loved ones</h3>
      </div> */}

      </div>


      <div className={ toggle ? 'sub-con' : "sub-container"}>
        <h1>Subscription Plans</h1>
        <div>
          <p>Select one of our cool Plans</p>
        </div>
        <div>
          <div className='sub-btn'>
            <FaRegLightbulb className='sub-icon'/>
            <div>
          <div className='sub-plan'>
            <h3>Basic</h3>
            <h3>$24.99/ <span>month</span> </h3>
          </div>
            <p>Unlimited calls to one country</p>

            </div>

          </div>
          <div className='sub-btn'>
            <FaRegLightbulb className='sub-icon'/>
            <div>
          <div className='sub-plan'>
            <h3>Premium</h3>
            <h3>$24.99/ <span>month</span> </h3>
          </div>
            <p>Unlimited calls to everywhere</p>

            </div>

          </div>
          <div className='sub-btn'>
            <FaRegLightbulb className='sub-icon'/>
            <div>
          <div className='sub-plan'>
            <h3>Pay as you Go</h3>
            <h3>$24.99/ <span>month</span> </h3>
          </div>
            <p>Unlimited calls to one country</p>

            </div>

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Sub
