import React from 'react';
import Frame66 from '../src/photo/Frame 66.svg';
import Image from 'react-bootstrap/Image';
// import './WhyChooseVahaan.css';
import './style.css';
const WhyChooseVahaan = () => {
  return (
    <>
      <div className='why_choose_vahan_bg'>
        <div className='why_choose_vahan_bg_section container'>
            <div className='why_choose_vahan_bg_section_one'>
                <div className='why_choose_vahan_bg_section_one_first'>
                <Image className='why_choose_vahan_bg_section_one_first_image' src={Frame66} fluid />
                    <h2>Use You Connect</h2>
                    <p>Now track all of your transaction easily.</p>
                </div>
                <div className='why_choose_vahan_bg_section_one_second'>
                <Image className='why_choose_vahan_bg_section_one_second_image' src={Frame66} fluid />
                    <h2>Use You Connect</h2>
                    <p>Now track all of your transaction easily.</p>
                </div>
                <div className='why_choose_vahan_bg_section_one_third'>
                <Image className='why_choose_vahan_bg_section_one_third_image' src={Frame66} fluid />
                    <h2>Use You Connect</h2>
                    <p>Now track all of your transaction easily.</p>
                </div>
                <div className='why_choose_vahan_bg_section_one_fourth'>
                <Image className='why_choose_vahan_bg_section_one_fourth_image' src={Frame66} fluid />
                    <h2>Use You Connect</h2>
                    <p>Now track all of your transaction easily.</p>
                </div>
            </div>
            <div className='why_choose_vahan_bg_section_two'>
                <h2>Why Choose Vahan+ as your <span>Car Partner</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat...</p>
                <button>GET STARTED NOW</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseVahaan
