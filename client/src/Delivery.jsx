import React from 'react';
import { FormControl } from 'react-bootstrap';
import './Styles/form.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Delivery () {
  return (
    <div className='h-screen bg-cover text-[#54d2d2] bg-no-repeat form flex items-center justify-center px-4'>
    <Form className='bg-white p-4 rounded-2xl'>
      <h1 className='text-2xl'>Pickup & Delivery</h1>
      <p className='text-lg'>Save more time with our pickup and delivery service</p>
      <Form.Group className="mb-3 w-full" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="text" placeholder="Your full Name" />
      </Form.Group>
      <Form.Group className="mb-3 w-full" controlId="formBasicNumber">
        <Form.Control type="number" placeholder="Your Phone number" />
      </Form.Group>
      <Form.Group className="mb-3 w-full" controlId="formBasicAddress">
        <Form.Control type="text" placeholder="Enter Home Address" />
      </Form.Group>
      <Button className='bg-[#54d2d2] border-none hover:bg-white hover:text-[#54d2d2] hover:shadow-2xl' type="submit">
        Signup for free pickup/delivery
      </Button>
    </Form>   
    </div>
  )
}

export default Delivery;