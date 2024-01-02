import React from 'react';
// import './VahaanFeatures.css';
import './style.css';
import Image from 'react-bootstrap/Image';
import Reactangle_199 from '../src/photo/Rectangle 199.png';
import Reactangle_200 from '../src/photo/Rectangle 200.png';
import Reactangle_201 from '../src/photo/Rectangle 201.png';
import Vector8 from '../src/photo/Vector 8.svg';
import Features from '../src/photo/FEATURES.svg'
const VahaanFeatures = () => {
  return (
    <>
    <div className='vahaan_features'>
        <h2>Vahan+ <span>Features</span></h2>
        <div className='vahan_feature_boxes container'>
            <div className='vahan_feature_box vahan_feature_box_one'>
            <Image src={Reactangle_199} fluid />
            <h4>Fuel Management</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, omnis ipsa rerum iure facilis ea, eum saepe expedita, officia molestias accusantium.</p>
            <div className='vahan_image'><p>Learn More</p><Image  src={Vector8} fluid /></div>
            </div>
            <div className='vahan_feature_box vahan_feature_box_two'>
            <Image src={Reactangle_200} fluid />
            <h4>Car Wash</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, omnis ipsa rerum iure facilis ea, eum saepe expedita, officia molestias accusantium.</p>
            <div className='vahan_image'><p>Learn More</p><Image  src={Vector8} fluid /></div>
            </div>
            <div className='vahan_feature_box vahan_feature_box_three'>
            <Image src={Reactangle_201} fluid />
            <h4>Know your Vahan</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, omnis ipsa rerum iure facilis ea, eum saepe expedita, officia molestias accusantium.</p>
            <div className='vahan_image'><p>Learn More</p><Image  src={Vector8} fluid /></div>
            </div>
        </div>
    </div>
        <div className='features_image'>
        <Image src={Features} fluid />
        </div>

    <div className='vahan_performance_bg'>
        <div className='vahan_performance_list container'>
            <div>
                <h2>100K+</h2>
                <p>Cars Listed On the Vahan+</p>
            </div>
            <div>
                <h2>80K+</h2>
                <p>Trusted Users of Vahan+</p>
            </div>
            <div>
                <h2>2M+</h2>
                <p>Vahan+ Downloads</p>
            </div>
            <div>
                <h2>3+</h2>
                <p>Serving from 3 Years</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default VahaanFeatures
