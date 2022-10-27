import React,{useReducer} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../Styles/form.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useUserAuth } from '../contexts/authContext';
import { customerData } from '../Data/customerData';
import { initialState,regReducer } from '../Reducers/registrationReducer';

function Delivery () {
  const [state, dispatch] = useReducer(regReducer,initialState)
  const {signUp} = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit= async (e) => {
    e.preventDefault();
    dispatch({type: 'SET_ERROR', Payload: ''})
    // const newUser = {
    //   _id: customerData.length + 1,
    //   name: state.name,
    //   email: state.email,
    //   phone: state.phone,
    //   address: state.address,
    //   ticket:[]
    // }
     try {
       await signUp(state.email,state.password);
       axios.post('http://localhost:8080/customers',{
        _id: customerData.length + 1,
        name: state.name,
        email: state.email,
        phone: state.phone,
        address: state.address,
        ticket:[]
      }).then((res=> console.log(res.data)))
       navigate('/MyOrders')
     } catch (err) {
      dispatch({type: 'SET_ERROR', Payload: 'Please check all inputs and try again'})
     }
  }
  

  return (
    <div className='h-screen bg-cover text-[#54d2d2] bg-no-repeat form flex items-center justify-center px-4' id="delivery">
    <Form className='bg-white p-4 rounded-2xl'>
      <h1 className='text-2xl'>Pickup & Delivery</h1>
      <p className='text-lg'>Save more time with our pickup and delivery service</p>
      <Form.Group className="mb-3 w-full" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter your email" value={state.email} onChange= {(e)=>{
          dispatch({type: 'SET_EMAIL', Payload: e.target.value})
        }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="text" placeholder="Your full Name" value={state.name} onChange= {(e)=>{
          dispatch({type: 'SET_NAME', Payload: e.target.value})
        }} />
      </Form.Group>
      <Form.Group className="mb-3 w-full" controlId="formBasicNumber">
        <Form.Control type="tel" pattern="[0-9]{11}" placeholder="Your Phone number" value={state.phone} onChange= {(e)=>{
          dispatch({type: 'SET_PHONE', Payload: e.target.value})
        }}/>
      </Form.Group>
      <Form.Group className="mb-3 w-full" controlId="formBasicAddress">
        <Form.Control type="text" placeholder="Enter Home Address" value={state.address} onChange= {(e)=>{
          dispatch({type: 'SET_ADDRESS', Payload: e.target.value})
        }}/>
      </Form.Group>
      <Form.Group className="mb-3 w-full" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Choose a password" value={state.password} onChange= {(e)=>{
          dispatch({type: 'SET_PASSWORD', Payload: e.target.value})
        }} />
      </Form.Group>
      <Button className='bg-[#54d2d2] p-2 border-none hover:bg-white hover:text-[#54d2d2] hover:shadow-2xl hover:border-solid hover:border-2 hover:border-[#54d2d2]' type="submit" onClick={handleSubmit}>
        Signup for free pickup/delivery
      </Button>
    </Form>
    </div>
  )
}

export default Delivery;