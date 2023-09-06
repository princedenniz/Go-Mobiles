import React from 'react'
import "./Footer.css"
import {AiFillInstagram, AiFillFacebook, AiFillTwitterSquare, AiFillYoutube, AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <div>
    <div className='container-footer'>
      <div className='footer'>
        <div>
            <p>
        <a href="#">Terms & conditions</a>

            </p>
            <p>
        <a href="#">phone</a>

            </p>
            <p>

        <a href="#">Contact us</a>
            </p>

        </div>
        <div>
            <p>
        <a href="#">FAQs</a>

            </p>
            <p>
        <a href="#">Download</a>

            </p>
            <p>
        <a href="#">Feedbacks</a>

            </p>

        </div>
      </div>

      <div className='footer-social'>
<AiFillInstagram className='icons'/>
<AiFillFacebook className='icons'/>
<AiFillLinkedin className='icons'/>
<AiFillTwitterSquare className='icons'/>
<AiFillYoutube className='icons'/>
      </div>
    </div>

    </div>
  )
}

export default Footer
