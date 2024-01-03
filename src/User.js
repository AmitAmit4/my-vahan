import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Glaciar from './photo/glaciar-national-park.jpg';
import Tahiti from './photo/tahiti.jpg';
import Argentine from './photo/argentine-patagonia.jpg';
import Amalfi from './photo/amalfi-coast.jpg';
import Great from './photo/great-barrier-reef.jpg';
import HomeIcon from './photo/home-icon.png'; 
import GiftIcon from './photo/gift-icon.png';
import FourSquare from './photo/four-square.jpg';
import VerticalDot from './photo/vertical-dot-icon.png';
import ThreeBall from './photo/threeball.jpg';
import Setting from './photo/setting.png';
// import './User.css';
import './style.css';


// import React, { useState, useEffect } from 'react';

function User() {
  const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const queryParams = {
            token: 'YqxnVdCSCGqANyYmLmtkdDhTOlUHYkeviILAiytTQPtjgzGkunNMcdVKCYcEcApEZQoEUiAkJKHviJISvmZXBoKYmlpLJEuUg',
            // Add more parameters as needed
          };
  
          // Convert the query parameters to a URL-encoded string
          const queryString = new URLSearchParams(queryParams).toString();
  
          // Append the query string to the URL
          const url = `http://65.1.77.233/vahanplus/customers.php?${queryString}`;
  
          const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log(result.data);
        setData(result.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);




  const fetchDataCustomers = async () => {
    try {
      const queryParams = {
        token: 'YqxnVdCSCGqANyYmLmtkdDhTOlUHYkeviILAiytTQPtjgzGkunNMcdVKCYcEcApEZQoEUiAkJKHviJISvmZXBoKYmlpLJEuUg',
        // Add more parameters as needed
      };

      // Convert the query parameters to a URL-encoded string
      const queryString = new URLSearchParams(queryParams).toString();

      // Append the query string to the URL
      const url = `http://65.1.77.233/vahanplus//customers.php?${queryString}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleCustomers = () => {
    fetchDataCustomers();
  };


  



  const fetchDataServices = async () => {
    try {
      const queryParams = {
        token: 'YqxnVdCSCGqANyYmLmtkdDhTOlUHYkeviILAiytTQPtjgzGkunNMcdVKCYcEcApEZQoEUiAkJKHviJISvmZXBoKYmlpLJEuUg',
        // Add more parameters as needed
      };

      // Convert the query parameters to a URL-encoded string
      const queryString = new URLSearchParams(queryParams).toString();

      // Append the query string to the URL
      const url = `http://65.1.77.233/vahanplus//services.php?${queryString}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleServices = () => {
    fetchDataServices();
  };




  const fetchDataStores = async () => {
    try {
      const queryParams = {
        token: 'YqxnVdCSCGqANyYmLmtkdDhTOlUHYkeviILAiytTQPtjgzGkunNMcdVKCYcEcApEZQoEUiAkJKHviJISvmZXBoKYmlpLJEuUg',
        // Add more parameters as needed
      };

      // Convert the query parameters to a URL-encoded string
      const queryString = new URLSearchParams(queryParams).toString();

      // Append the query string to the URL
      const url = `http://65.1.77.233/vahanplus//stores.php?${queryString}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleStores = () => {
    fetchDataStores();
  };





  const fetchDataBrands = async () => {
    try {
      const queryParams = {
        token: 'YqxnVdCSCGqANyYmLmtkdDhTOlUHYkeviILAiytTQPtjgzGkunNMcdVKCYcEcApEZQoEUiAkJKHviJISvmZXBoKYmlpLJEuUg',
        // Add more parameters as needed
      };

      // Convert the query parameters to a URL-encoded string
      const queryString = new URLSearchParams(queryParams).toString();

      // Append the query string to the URL
      const url = `http://65.1.77.233/vahanplus//brands.php?${queryString}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleBrands = () => {
    fetchDataBrands();
  };




  const fetchDataCleaners = async () => {
    try {
      const queryParams = {
        token: 'YqxnVdCSCGqANyYmLmtkdDhTOlUHYkeviILAiytTQPtjgzGkunNMcdVKCYcEcApEZQoEUiAkJKHviJISvmZXBoKYmlpLJEuUg',
        // Add more parameters as needed
      };

      // Convert the query parameters to a URL-encoded string
      const queryString = new URLSearchParams(queryParams).toString();

      // Append the query string to the URL
      const url = `http://65.1.77.233/vahanplus//cleaners.php?${queryString}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleCleaners = () => {
    fetchDataCleaners();
  };



  
  const fetchDataPlans = async () => {
    try {
      const queryParams = {
        token: 'YqxnVdCSCGqANyYmLmtkdDhTOlUHYkeviILAiytTQPtjgzGkunNMcdVKCYcEcApEZQoEUiAkJKHviJISvmZXBoKYmlpLJEuUg',
        // Add more parameters as needed
      };

      // Convert the query parameters to a URL-encoded string
      const queryString = new URLSearchParams(queryParams).toString();

      // Append the query string to the URL
      const url = `http://65.1.77.233/vahanplus//plans.php?${queryString}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handlePlans = () => {
    fetchDataPlans();
  };






  return (
    <>
      {/* Your JSX code */}

      <div className="container-fluid">
        <div className='row'>
            <div className='col-md-1 col-2' style={{borderRight:"1px solid #E9EEF5",position:"fixed"}}>
                <p className='my-2' onClick={handleCustomers}>
                    <img src={HomeIcon} alt="" width={"40px"} />    
                </p>
                <p className='my-2' onClick={handleServices}>
                    <img src={GiftIcon} alt="" width={"40px"} />    
                </p>
                <p className='my-2' onClick={handleStores}>
                    <img src={FourSquare} alt="" width={"40px"} />    
                </p>
                <p className='my-2' onClick={handleBrands}>
                    <img src={VerticalDot} alt="" width={"40px"} />    
                </p>
                <p className='my-2' onClick={handleCleaners}>
                    <img src={ThreeBall} alt="" width={"40px"} />    
                </p>
                <p className='my-2' onClick={handlePlans}>
                    <img src={Setting} alt="" width={"40px"} />    
                </p>
                
            </div>
            <div className='col-md-11 col-10' style={{marginLeft:"100px"}}>        
                <div className='container mt-4'>
                    <Navbar className="bg-body-tertiary justify-content-between container px-3">
                        <div>Travel History</div>
                        <Form inline>
                            <Row>
                            <Col xs="auto">
                                <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                                />
                            </Col>
                            </Row>
                        </Form>
                    </Navbar>
                    <div className='user-booking-record mt-4'>
                        <div className='user-total-booking'>
                            <p>TOTAL BOOKING</p>
                            <div className='user-record-value'>
                                <p className='m-0'>31,556</p>
                                <a href="">Get Report</a>
                            </div>
                        </div>
                        <div className='user-total-revenue'>
                            <p>TOTAL REVENUE</p>
                            <div className='user-record-value'>
                                <p className='m-0'>$61,556</p>
                                <a href="">Get Report</a>
                            </div>
                        </div>
                        <div className='user-total-debt'>
                            <p>TOTAL DEBT</p>
                            <div className='user-record-value'>
                                <p className='m-0'>$12,556</p>
                                <a href="">Get Report</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="container-fluid">
                          
                    <div className='container mt-5 mb-5'>
                        <div className='table-responsive'>
                            <table className="table" width={"80%"}>
                                <tbody>
                                   
                                    {Array.isArray(data) && data.map((item) => (
                                        <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.society}</td>
                                        <td>{item.city}</td>
                                        <td>{item.pincode}</td>
                                        <td>{item.status}</td>
                                        <td>{item.date_added}</td>
                                        <td>{item.last_modified}</td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> */}



                <div className='container mt-5 mb-5'>
                    <div className='table-responsive'>
                        <table class="table" width={"80%"}>
                            <tbody>

                            {/* {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.society}</td>
                                    <td>{item.city}</td>
                                    <td>{item.pincode}</td>
                                    <td>{item.status}</td>
                                    <td>{item.date_added}</td>
                                    <td>{item.last_modified}</td>
                                </tr>
                            ))} */}

                        

                            {Array.isArray(data) && data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.society}</td>
                                    <td>{item.city}</td>
                                    <td>{item.pincode}</td>
                                    <td>{item.status}</td>
                                    <td>{item.date_added}</td>
                                    <td>{item.last_modified}</td>
                                </tr>
                            ))}


                                {/* <tr>
                                    <td>
                                        <div className='glaciar-national-park d-flex'>
                                            <div className='glaciar-national-park-image'>
                                                <img src={Glaciar} width={"70px"}/>
                                            </div>
                                            <div className='glaciar-national-park-text'>
                                                <p className='m-0'>Glacier National Park</p>
                                                <p className='unated-states'>United States</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>5 Night</p>
                                    </td>
                                    <td>
                                        <p><i class="fa-solid fa-plane-departure"></i> 05 Dec 2018</p>
                                    </td>
                                    <td>
                                        <p><i class="fa-solid fa-plane-arrival"></i> 12 Dec 2018</p>
                                    </td>
                                    <td>
                                        <p>2 Adult</p>
                                    </td>
                                    <td>
                                        <p>$120</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='glaciar-national-park d-flex'>
                                            <div className='glaciar-national-park-image'>
                                                <img src={Tahiti} width={"70px"}/>
                                            </div>
                                            <div className='glaciar-national-park-text'>
                                                <p className='m-0'>Tahiti</p>
                                                <p  className='unated-states'>French</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>4 Night</p>
                                    </td>
                                    <td>
                                        <p><i class="fa-solid fa-plane-departure"></i> 08 Dec 2018</p>
                                    </td>
                                    <td>
                                        <p><i class="fa-solid fa-plane-arrival"></i> 14 Dec 2018</p>
                                    </td>
                                    <td>
                                        <p>3 Adult</p>
                                    </td>
                                    <td>
                                        <p>$140</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='glaciar-national-park d-flex'>
                                            <div className='glaciar-national-park-image'>
                                                <img src={Argentine} width={"70px"}/>
                                            </div>
                                            <div className='glaciar-national-park-text'>
                                                <p className='m-0'>Argentine Patagonia</p>
                                                <p className='unated-states'>Argentine</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>12 Night</p>
                                    </td>
                                    <td>
                                        <p><i class="fa-solid fa-plane-departure"></i> 11 Dec 2018</p>
                                    </td>
                                    <td>
                                        <p><i class="fa-solid fa-plane-arrival"></i> 23 Dec 2018</p>
                                    </td>
                                    <td>
                                        <p>6 Adult</p>
                                    </td>
                                    <td>
                                        <p>$300</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='glaciar-national-park d-flex'>
                                            <div className='glaciar-national-park-image'>
                                                <img src={Amalfi} width={"70px"}/>
                                            </div>
                                            <div className='glaciar-national-park-text'>
                                                <p className='m-0'>Amalfi coast</p>
                                                <p className='unated-states'>Italy</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>2 Night</p>
                                    </td>
                                    <td>
                                        <p><i class="fa-solid fa-plane-departure"></i> 10 Dec 2018</p>
                                    </td>
                                    <td>
                                        <p><i class="fa-solid fa-plane-arrival"></i> 12 Dec 2018</p>
                                    </td>
                                    <td>
                                        <p>1 Adult</p>
                                    </td>
                                    <td>
                                        <p>$80</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='glaciar-national-park d-flex'>
                                            <div className='glaciar-national-park-image'>
                                                <img src={Great} width={"70px"}/>
                                            </div>
                                            <div className='glaciar-national-park-text'>
                                                <p className='m-0'>Great Barrier Reaf</p>
                                                <p className='unated-states'>Australia</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>4 Night</p>
                                    </td>
                                    <td>
                                        <p><i class="fa-solid fa-plane-departure"></i> 01 Dec 2018</p>
                                    </td>
                                    <td>
                                        <p><i class="fa-solid fa-plane-arrival"></i> 05 Dec 2018</p>
                                    </td>
                                    <td>
                                        <p>3 Adult</p>
                                    </td>
                                    <td>
                                        <p>$100</p>
                                    </td>
                                </tr> */}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>  
     
    </>
  );
}


export default User;

