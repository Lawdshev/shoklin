import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link,useNavigate} from "react-router-dom"

function MenuBar() {
  const navigate = useNavigate()
  return (
    <Navbar className='bg-[#54d2d2] px-3'  expand="lg">
      <Container fluid className='flex justify-around w-full '>
        <Navbar.Brand href="#" className='font-[pacifico] '>ShoKlin</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className='flex flex-col lg:flex-row h-screen lg:h-fit' >
          <Nav
            className="pt-8 lg:pt-1 mx-auto w-3/5 h-3/5 items-center justify-between px-4 lg:ml-10 font-medium text-medium text-white"
          >
            <Link to="/" >Home</Link>
            <Link to="/Service">Service</Link>
            <Link to="/">Pricing</Link>
            <Link to="/">About Us</Link>
            <Link to="/MyOrders">My Account</Link>
          </Nav>
          <Button className="hidden fon lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-[#357575] border-none rounded-full" onClick={()=> navigate('/MakeOrder')}>Order Now</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuBar;