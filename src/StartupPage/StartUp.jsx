import React from 'react'
import './StartUp.css'
import {Animate} from 'react-simple-animate';
import { Link } from 'react-router-dom'
import Woman1 from '/src/assets/4.png'
import Woman2 from '/src/assets/3.png'
import Woman3 from '/src/assets/2.png'
import Woman4 from '/src/assets/4.png'
import Woman5 from '/src/assets/5.png'
import GoMobileLogo from '../assets/gomobile logo.jpg'

const StartUp = () => {
  return (
    <div className='container'>
      <div className='logo'>
      <img src={GoMobileLogo} className='gomobile-logo'/>
        <h1>GoMobilez</h1>
      </div>
      <div className='middle'>
        <p>Make calls everywhere.</p>
        <p>To love ones.</p>
      </div>

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: "translateY(550px)" }}
        end={{ transform: "translatex(0px)" }}
      >
      <div className='btn-container'>
        <button><Link to={"/NavPage"}>Get Started</Link> </button>
      </div>

      </Animate>
      <div className='img1'>
        <img src={Woman1} alt="woman" className='img' />
      </div>
      <div className='img2'>
        <img src={Woman2} alt="woman" className='img' />
      </div>
      <div className='img3'>
        <img src={Woman3} alt="woman" className='img' />
      </div>
      <div className='img4'>
        <img src={Woman4} alt="woman" className='img' />
      </div>
      <div className='img5'>
        <img src={Woman5} alt="woman" className='img' />
      </div>
    </div>
  )
}

export default StartUp
