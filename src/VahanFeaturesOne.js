import Accordion from 'react-bootstrap/Accordion';
// import './VahanFeaturesOne.css';
import './style.css';
function VahanFeaturesOne() {
  return (
    <>
       <div className='question_related_to_vahan'>
          <h2><span>Questions</span> related to Vahan+</h2>
       </div>
    <div className='vahan_features_one_bg'>
    <div className='vahan_features_one_section'>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className='accordian_header'><h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h4></Accordion.Header>
        <Accordion.Body className='accordian_body'>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
        </Accordion.Body>
      </Accordion.Item>     
      <Accordion.Item eventKey="1">
        <Accordion.Header className='accordian_header'><h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h4></Accordion.Header>
        <Accordion.Body className='accordian_body'>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className='accordian_header'><h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h4></Accordion.Header>
        <Accordion.Body className='accordian_body'>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className='accordian_header'><h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h4></Accordion.Header>
        <Accordion.Body className='accordian_body'>
         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header className='accordian_header'><h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h4></Accordion.Header>
        <Accordion.Body className='accordian_body'>
         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </div>
    </>
  );
}

export default VahanFeaturesOne;