import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
// import GoogleButton from "react-google-button";

function SignIn() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
//   const {SignIn,googleSignIn} = useUserAuth();

    return (
        <div className='h-screen bg-cover text-[#54d2d2] bg-no-repeat form flex items-center justify-center px-4' id="delivery">
    <Form className='bg-white p-8 rounded-2xl h-96 flex flex-col justify-between'>
      <h1 className='text-2xl self-center font-bold'>Sign In</h1>
      <p className='text-lg'>Input Your Email address and Password below to Signin</p>
      <Form.Group className="mb-3 w-full" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Your Password" />
      </Form.Group>
      <Button className='bg-[#54d2d2] px-4 border-none self-center hover:bg-white hover:text-[#54d2d2] hover:shadow-2xl hover:border-solid hover:border-2 hover:border-[#54d2d2]' type="submit">
        Sign In
      </Button>
    </Form>   
    </div>
 )
}

export default SignIn;