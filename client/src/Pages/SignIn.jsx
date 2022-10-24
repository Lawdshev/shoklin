import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useReducer } from 'react';
import { Link,useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import { useUserAuth } from '../contexts/authContext';
import { initialState, signInReducer } from '../Reducers/signInReducer';

function SignIn() {
  const [state, dispatch] = useReducer(signInReducer,initialState);

  // const [email,setEmail] = useState('');
  // const [password,setPassword] = useState('');
  // const [error,setError] = useState('');
  const {logIn} = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit= async (e) => {
    e.preventDefault();
     try {
       await logIn(state.email,state.password)
       navigate('/MyOrders')
     } catch (err) {
      dispatch({type: "SET_ERROR"})
     }
  };

    return (
        <div className='h-screen bg-cover text-[#54d2d2] bg-no-repeat form flex items-center justify-center px-4' >
    <Form className='bg-white px-14 py-8 rounded-2xl h-96 flex flex-col justify-between'>
      {state.error !== '' ? <Alert variant = 'danger' className='text-black text-center'>{state.error}</Alert> : '' }
      <h1 className='text-2xl self-center font-bold'>Sign In</h1>
      <p className='text-lg'>Input Your Email address and Password below to Signin</p>
      <Form.Group className="mb-3 w-full" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter your email" value={state.email} onChange= {(e)=>{
          dispatch({type: 'SET_EMAIL', Payload: e.target.value})
        }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Your Password" value={state.password}  onChange= {(e)=>{
          dispatch({type: 'SET_PASSWORD', Payload: e.target.value})
        }}/>
      </Form.Group>
      <Button className='bg-[#54d2d2] px-4 border-none self-center hover:bg-white hover:text-[#54d2d2] hover:shadow-2xl hover:border-solid hover:border-2 hover:border-[#54d2d2]' type="submit" onClick={handleSubmit}>
        Sign In
      </Button>
      <p className='text-center'>don't have an account? <Link to='/'>Sign up here</Link></p>
    </Form>   
    </div>
 )
}

export default SignIn;