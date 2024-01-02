import React, { useState } from "react";
// import React from 'react';
import carwash from '../src/photo/Group_445.png';
import vector8_8 from '../src/photo/Vector 8_8.svg'
// import './Features.css';
import './style.css';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Vector8 from '../src/photo/Vector 8 (1).svg';
import image9 from '../src/photo/image 9.png';

import Calendar from 'react-calendar';
import Reactangle_193 from '../src/photo/Rectangl_193.svg';

// import { Value } from 'react-calendar';


const Features = () => {
    
    const myStyle = {
        backgroundImage: `url(${carwash})`,
        height: "200px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };


    // type ValuePiece = Date | null;
    // type Value = ValuePiece | [ValuePiece, ValuePiece];
    // type ValuePiece = Date | null;
    // type Value = ValuePiece | [ValuePiece, ValuePiece];
    // const [value, onChange] = useState<Value>(new Date());

    const [date,setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };

    return (
          <>
     <div className='feature'>
        <div className='featureImage'>
            <div className="practice_section" style={myStyle}>
            <div className='featureImage_section'>
            <h2>Car Wash</h2>
            <p><Image src={vector8_8} fluid /><span>Back to Homepage</span></p>
        </div>
            </div>
        {/* <Image src={carwash} fluid /> */}
        
        </div>
        <div className='feature_section'>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col lg={3}>
          <Nav variant="pills" className="flex-column nav_bar">
            <Nav.Item className='nav_item section_page'>
              <Nav.Link className='content_item' eventKey="first"><div className='text-center side_menu'><p>Add Your Car</p></div> <div><Image className='item_image' src={Vector8} fluid /></div></Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav_item section_page'>
              <Nav.Link className='content_item' eventKey="second"><div className='text-center side_menu'><p>Choose Your Package</p></div> <div><Image className='item_image' src={Vector8} fluid /></div></Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav_item section_page'>
              <Nav.Link className='content_item' eventKey="third"> <div className='text-center side_menu'><p>Sceudual Car Wash</p></div> <div><Image className='item_image' src={Vector8} fluid /></div></Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav_item section_page'>
              <Nav.Link className='content_item' eventKey="fourth"><div className='text-center side_menu'><p>Order Summary</p> </div> <div><Image className='item_image' src={Vector8} fluid /></div></Nav.Link>
            </Nav.Item>
            <Nav.Item className='nav_item section_page'>
              <Nav.Link className='content_item' eventKey="fifth"> <div className='text-center side_menu'><p>Your Subscriptions</p></div> <div><Image className='item_image' src={Vector8} fluid /></div></Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col lg={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <div className='content_first_bg'>
                    <div className='content_first_section'>
                       <h2>Add Your Car</h2>
                       <div className='content_first_section_input'>
                      
                        <div className='content_first_section_input_one'>
                      
                       <input type="text" placeholder='Car Name/Company' className='content_image content_image_one' />
                       </div>
                       <div className='content_first_section_input_two'>
                       <input type="text" placeholder='Car Model No' className='content_image content_image_two' />
                       </div>
                       </div>
                       <Image className='features_section_one_image' src={image9} fluid />
                       <button className='upload_your_car_image_btn'>
                        UPLOAD YOUR CAR IMAGE
                       </button>
                       {/* <div className='feature_section_btn'>
                       <button>CONTINUE</button>
                       </div> */}
                       <button className='feature_section_btn'>CONTINUE</button>
                    </div>
                  
                </div>
                </Tab.Pane>
            <Tab.Pane eventKey="second">
                <div className='content_two_bg'>
                    <div className='content_two_section'>
                        <h2>Choose Your Package</h2>
                        <p>Pick The Plan that’s Right For You!</p>
                        <div className='content_two_section_one'>
                        <div className='content_two_section_one_first'>
                            <h3>Bronze Package</h3>
                            <h3>349INR</h3>
                        </div>
                        <div className='content_two_section_one_second'>
                            <p>Package Includes:</p>
                            <p>Daily Car Wash <Image className='features_section_one_image' src={Reactangle_193} fluid /></p>
                        </div>
                        <div className='content_two_section_one_third'>
                            <button>Select This Plan</button>
                            </div>
                        </div>
                        <div className='content_two_section_one'>
                        <div className='content_two_section_one_first'>
                            <h3>Bronze Package</h3>
                            <h3>349INR</h3>
                        </div>
                        <div className='content_two_section_one_second'>
                            <p>Package Includes:</p>
                            <div>
                            <p>Daily Car Wash <Image className='features_section_one_image' src={Reactangle_193} fluid /></p>
                            <p>Weekly Vaccum <Image className='features_section_one_image' src={Reactangle_193} fluid /></p>
                            </div>
                            
                        </div>
                        <div className='content_two_section_one_third'>
                            <button>Select This Plan</button>
                            </div>
                        </div>
                        <div className='content_two_section_one'>
                        <div className='content_two_section_one_first'>
                            <h3>Bronze Package</h3>
                            <h3>349INR</h3>
                        </div>
                        <div className='content_two_section_one_second'>
                            <p>Package Includes:</p>
                            <div>
                            <p>Daily Car Wash <Image className='features_section_one_image' src={Reactangle_193} fluid /></p>
                            <p>Weekly Vaccum <Image className='features_section_one_image' src={Reactangle_193} fluid /></p>
                            <p>Water Wash <Image className='features_section_one_image' src={Reactangle_193} fluid /></p>
                            </div>
                            
                        </div>
                        <div className='content_two_section_one_third'>
                            <button>Select This Plan</button>
                            </div>
                        </div>
                        
                            <button className='content_two_section_btn'>CONTINUE</button>
                    </div>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
                <div className='features_third_section_calender'>
                     <h2>My Subscriptions</h2>
                      <p>Below are your subscription details:</p>
                      <div className="my_calender">
                    <Calendar className='calendar' onChange={onChange} value={date} />
                    </div>
                    <button className='features_third_section_calender_btn'>CONTINUE</button>
                    </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
                <div className='content_fourth_bg'>
                    <div className='content_fourth_section'>
                        <h2>Order Summary</h2>
                        <p>Pick Suitable Dates for Car Wash</p>
                       <div className='content_fourth_section_first'>
                        <h3>Bronze Package</h3> 
                        <h3>349 INR</h3> 
                       </div>
                          <p className='content_fourth_section_p1'>CHANGE</p>
                       </div>
                    <div className='content_fourth_section_second'>
                        <div>Additional Charges</div>
                        <div>50 INR</div>
                    </div>
                    <div className='content_fourth_section_third'>
                        <div>Sub Total</div>
                        <div>349 INR</div>
                    </div>
                   <p className='content_fourth_section_my_subscriptions'>MY SUBSCRIPTIONS</p>
                  <button className='content_fourth_section_button'>CONFIRM BOOKING</button>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
            <div className='features_third_section_calender'>
                      <h2>My Subscriptions</h2>
                      <p>Below are your subscription details:</p>
                <Calendar onChange={onChange} value={date} />
                <button className='features_third_section_calender_btn'>BACK TO HOMEPAGE</button>
                </div>
                </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
        </div>
     </div>
        </>
    );
};

export default Features;
