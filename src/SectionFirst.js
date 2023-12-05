import React, { useState } from 'react'
import './SectionFirst.css'
import Group450 from '../src/photo/Group 450.svg'
import bannerimage from '../src/photo/Group43.png'
import Image from 'react-bootstrap/Image';
const SectionFirst = () => {
    
   const [state,setState] = useState({
        name:"",phone:"",email:"",city:"",code:""
   })
   const [nameMessage,setNameMessage] = useState("* Name is Mandatory")
   const handler=(e)=>{
      setState({...state,[e.target.name]:e.target.value})
   }

   const submitData = (e) =>{
      e.preventDefault();
      const nameReg=/^\w+@[a-zA-Z\s]+$/
      const emailReg=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
      if(state.name===""){
        
      }
      console.log(state);
   }


    const myStyle = {
        backgroundImage: `url(${bannerimage})`,
        height: "auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
  return (
    <>
      <div className="section_first" style={myStyle}>
      <div className='banner_content container'>
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
              <input type="text" className='form-control' placeholder='Your Full Name' name='name' value={state.name} onChange={handler}/>
              <div style={{color:"red"}}>{nameMessage}</div>
              <input type="number" className='form-control' placeholder='Your Phone Number' name='phone' value={state.phone} onChange={handler}/>
              <input type="email" className='form-control' placeholder='Your Email Address' name='email' value={state.email} onChange={handler}/>
              <div className='city_code'>
              <input className='your_city form-control'  type="text" placeholder='Your City' name='city' value={state.city}onChange={handler}/>
              <input className='your_code form-control' type="number" placeholder='Code' name='code' value={state.code} onChange={handler}/>
              </div>
              <button onClick={submitData}>PROCEED TO CONTINUE</button>
          </div>
        </div>
        
      </div>
      </div>
    </>
  )
}

export default SectionFirst
