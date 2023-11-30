import React from 'react'
// import './SectionFirst.css'
import Image from 'react-bootstrap/Image';
import bannerimage from '../src/photo/Group43.png'
import Group450 from '../src/photo/Group 450.svg'
const SectionFirst = () => {
  return (
    <div className='w-100 banner_section'>
      <Image src={bannerimage} fluid />
      <div className='banner_content'>
        <div className='banner_content_one'>
            <h1>One Stop Solution</h1>
            <h1>to your Car Maintenance Problems</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
            {/* <Image className='scanner' src={Group450} fluid /> */}
            <div className='banner_content_one_scanner'><Image className='ground' src={Group450} fluid /></div> 
        </div>
        <div className='banner_content_two'>
          <div className='signup_at_vahan'>
              <h4>Sign Up at Vahan +</h4>
              <input type="text" placeholder='Your Full Name'/>
              <input type="number" placeholder='Your Phone Number'/>
              <input type="email" placeholder='Your Email Address'/>
              <div className='city_code'>
              <input className='your_city' type="text" placeholder='Your City'/>
              <input className='your_code' type="number" placeholder='Code'/>
              </div>
              <button>PROCEED TO CONTINUE</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default SectionFirst
