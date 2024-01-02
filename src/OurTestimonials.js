import React from 'react';
// import "./OurTestimonials.css";
import './style.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image from 'react-bootstrap/Image';
import Vector13 from '../src/photo/Vector 13.svg';
const OurTestimonials = () => {
 
  return (
    <>
     <div className='our_testimonials_bg'>
       <h2>Our Testimonials</h2>
       <h3>What Our Clients Are <span>Saying</span></h3>
    </div>
    <OwlCarousel className='owl-theme' loop items={2} center={true} margin={10} nav>
    <div class='item'>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className='our_testimonials_section_image'>
        <Image className='vector13' src={Vector13} fluid/>
        <h6>LOREM IPSUM</h6>
        </div>
    </div>
    <div class='item'>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className='our_testimonials_section_image'>
        <Image className='vector13' src={Vector13} fluid/>
        <h6>LOREM IPSUM</h6>
        </div>
    </div>
    <div class='item'>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className='our_testimonials_section_image'>
        <Image className='vector13' src={Vector13} fluid/>
        <h6>LOREM IPSUM</h6>
        </div>
    </div>
    <div class='item'>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className='our_testimonials_section_image'>
        <Image className='vector13' src={Vector13} fluid/>
        <h6>LOREM IPSUM</h6>
        </div>
    </div>
    <div class='item'>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className='our_testimonials_section_image'>
        <Image className='vector13' src={Vector13} fluid/>
        <h6>LOREM IPSUM</h6>
        </div>
    </div>
    <div class='item'>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className='our_testimonials_section_image'>
        <Image className='vector13' src={Vector13} fluid/>
        <h6>LOREM IPSUM</h6>
        </div>
    </div>
    {/* <div class='item'>
        <h4>7</h4>
    </div>
    <div class='item'>
        <h4>8</h4>
    </div>
    <div class='item'>
        <h4>9</h4>
    </div>
    <div class='item'>
        <h4>10</h4>
    </div>
    <div class='item'>
        <h4>11</h4>
    </div>
    <div class='item'>
        <h4>12</h4>
    </div> */}
</OwlCarousel>
</>
  );
};

export default OurTestimonials;