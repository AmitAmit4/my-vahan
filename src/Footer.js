import React from 'react'
import './Footer.css';
import Image from 'react-bootstrap/Image';
import Logo from '../src/photo/Logo.svg';
import facebook from '../src/photo/facebook-logo-button.svg';
import twitter from '../src/photo/twitter.svg';
import instagram from '../src/photo/vimeo-social-logo.svg';
import combinedShape from '../src/photo/Combined Shape.svg';
import Group459 from '../src/photo/Group 459.svg'
import SendIcon from '../src/photo/Send Icon.svg'
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer_uppersection'>
            <div className='footer_uppersection_child'>
                <div><p>Newsletter</p></div>
                <div className='footer_uppersection_child_input'>
                    <input type="email" placeholder='Your email' />
                    <Image src={SendIcon} fluid />
                </div>
            </div>
        </div>
        <div className='footer_bg'>
        <div className='footer_section container'>
            <div className='footer_section_one'>
            <Image src={Logo} fluid />
            </div>
            <div className='footer_section_two'>
                <p>Hello, we are ABC. trying to make an effort to put the right people for you to get the best results. Just insight</p>
                <p>(123)456-7890</p>
                <p>ABC@gmail.com</p>
                <div className='footer_icons'>
                <Image src={facebook} fluid />
                <Image src={twitter} fluid />
                <Image src={instagram} fluid />
                <Image src={combinedShape} fluid />
                </div>
            </div>
            <div className='footer_section_three'>
                <h6>Features</h6>
                <p>Add Your Car</p>
                <p>Know Your Vahan</p>
                <p>Fuel Maintenance</p>
                <p>Car Wash</p>
                <p>Car Maintenance</p>
                <p>Contact</p>
            </div>
            <div className='footer_section_four'>
                <h6>Explore</h6>
                <p>Resources</p>
                <p>Blog</p>
                <p>Documents</p>
            </div>
            </div>
        <Image className="google_app_store_logo" src={Group459} fluid />
      </div>
        </div>
       
    </>
  )
}

export default Footer
