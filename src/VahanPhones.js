import React from 'react';
// import './VahanPhones.css';
import './style.css';
import Image from 'react-bootstrap/Image';
import GooglePlay from '../src/photo/Google_Play_Badge_001eb0f465 1.svg';
import AppleStore from '../src/photo/App_Store_Badge_f39b9659af 1.svg';
import Group451 from '../src/photo/Group 451.svg';
import VahanCarMobile from '../src/photo/vahan_car_mobile_ui.svg';
// import Ellipse19 from '../src/photo/Ellipse 19.png'
// import Group468 from '../src/photo/Group 468.png'
const VahanPhones = () => {
  return (
    <>
      <div className='vahanphones_bg container'>
        <div className='vahanphones_section_one'>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
            <div className='vahanphones_section_one_image'>
            <Image src={GooglePlay} fluid />
            <Image src={AppleStore} fluid />
            </div>
            <Image className='vahanphones_section_one_image_three' src={Group451} fluid />
 
        </div>
        <div className='vahanphones_section_two'>
        {/* <Image className='ellipse' src={Ellipse19} fluid /> */}
        {/* <Image className='group_two' src={Group468} fluid /> */}
        <Image className='ellipse' src={VahanCarMobile} fluid />
        </div>
      </div>
    </>
  )
}

export default VahanPhones
