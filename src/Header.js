import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import icon_one from '../src/photo/Layer_1.svg';
import './Header.css';

function Header() {
  return (
    <Navbar expand="xl" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><Image src={icon_one} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='nav-list-bar' id="basic-navbar-nav">
          <Nav className="navbar_list_bar me-auto">
            <Nav.Link className='navbar_list active' ><Link to="/" className="header_about">About</Link></Nav.Link>
            <Nav.Link className='navbar_list' > <Link to="/feature" className="header_about">Features</Link></Nav.Link>
            <Nav.Link className='navbar_list' href="#link">Pricing</Nav.Link>
            <Nav.Link className='navbar_list' href="#link">Products</Nav.Link>
            <Nav.Link className='navbar_list' href="#link">Contact Us</Nav.Link>
            <Nav.Link className='navbar_list icon_search' href="#link"><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>    
          </Nav>
          <Nav className='button_navbar_bar  ms-auto'>
          <Button className='button_navbar_one' variant="light">LOG IN</Button>{' '}
          <Button className='button_navbar_two' variant="outline-secondary">REGISTER</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;