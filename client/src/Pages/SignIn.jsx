import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import bgImg from '../Images/delivery.jpg'
import { useReducer } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useUserAuth } from '../contexts/authContext';
import { initialState, signInReducer } from '../Reducers/signInReducer';

function SignIn() {
  const [state, dispatch] = useReducer(signInReducer, initialState);
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

    return ( <section class="mt-2 lg:h-screen">
  <div class="px-6 h-full text-gray-800">
    <div
      class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full"
    >
      <div
        class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src={bgImg}
          class="w-full"
          alt="Sample image"
        />
      </div>
      <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 ">
        <form>
          <div class="flex flex-row items-center justify-center lg:justify-start ">
            <p class="text-lg mb-0 mr-4">Sign in to continue</p> 
          </div>

          <div
            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p class="text-center font-semibold mx-4 mb-0"></p>
          </div>

          {state.error !== '' ? <Alert variant = 'danger' className='text-black text-center'>{state.error}</Alert> : '' }
          <div class="mb-6">
            <input
              type="email"  value={state.email} onChange= {(e)=>{dispatch({type: 'SET_EMAIL', Payload: e.target.value})}}

              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
            />
          </div>
          
          <div class="mb-6">
            <input
              type="password"
              value={state.password} 
              onChange= {(e)=>{{dispatch({type: 'SET_PASSWORD', Payload: e.target.value})}}}

              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
            />
          </div>

          <div class="flex justify-between items-center mb-6">
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                >Remember me</label
              >
            </div>
            <a class="text-gray-800">Forgot password?</a>
          </div>

          <div class="text-center lg:text-left">
            <button
              onClick={handleSubmit}
              type="button"
              class="inline-block px-7 py-3 bg-[#54d2d2] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#145555] hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
            </button>
            <p class="text-sm font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
              <Link
                to='/'
                class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >Register 
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>)
}

export default SignIn;

{/* // <div className='h-screen bg-cover text-[#54d2d2] bg-no-repeat form flex items-center justify-center px-4' >
// <Form className='bg-white px-14 py-8 rounded-2xl h-96 flex flex-col justify-between'>
//   {state.error !== '' ? <Alert variant = 'danger' className='text-black text-center'>{state.error}</Alert> : '' }
//   <h1 className='text-2xl self-center font-bold'>Sign In</h1>
//   <p className='text-lg'>Input Your Email address and Password below to Signin</p>
//   <Form.Group className="mb-3 w-full" controlId="formBasicEmail">
//     <Form.Control type="email" placeholder="Enter your email" value={state.email} onChange= {(e)=>{ */}
{/* //       dispatch({type: 'SET_EMAIL', Payload: e.target.value})
//     }}/>
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Control type="password" placeholder="Your Password" value={state.password}  onChange= {(e)=>{ */}
{/* //       dispatch({type: 'SET_PASSWORD', Payload: e.target.value})
//     }}/>
//   </Form.Group>
//   <Button className='bg-[#54d2d2] px-4 border-none self-center hover:bg-white hover:text-[#54d2d2] hover:shadow-2xl hover:border-solid hover:border-2 hover:border-[#54d2d2]' type="submit" onClick={handleSubmit}>
//     Sign In
//   </Button>
//   <p className='text-center'>don't have an account? <Link to='/'>Sign up here</Link></p>
// </Form>    */}
// </div>