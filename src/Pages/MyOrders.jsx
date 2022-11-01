import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Ticket from '../Components/Ticket';
import { useUserAuth } from '../contexts/authContext';
import { useLaundryContext } from '../contexts/laundryContexts';

function MyOrders() {
  const {setLoading} = useLaundryContext()
  const [customer,setCustomer] = useState({})
  const [tickets,setTickets] = useState([]);
  const {handleShow} = useLaundryContext();
  const {user} = useUserAuth();
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    fetch('https://shoklin-server.onrender.com/customers')
    .then(res =>  res.json())
    .then((data)=> {
      const customer = data.find(c=>c.email == user.email);
      if(!customer){
        handleShow("Please Sign In To Continue","red")
        navigate('/SignIn')
      }
      setCustomer(customer)
      setTickets(customer.tickets)
    })  
    setLoading(false)
  }, [user.email])


  return (
      <div className='flex flex-col w-full items-center justify-around lg:flex-row h-screen'> 
      <div className='bg-[#54d2d2] w-full flex flex-col items-center h-screen lg:w-1/3 p-2'>
        <div className="flex  flex-col items-center w-full justify-around text-xl font-bold">
          <div className="rounded-full bg-red-100 h-40 w-40 text-black"></div>  
          <button className='mt-2 rounded-lg p-2 text-sm '><i class="fa-solid fa-user-pen"></i>Edit</button>
        </div>
        <div className='flex flex-row w-fit mt-2 '>
          <div className=' p-2 flex flex-col justify-around h-60'>
            <p><i className="fa-solid fa-user"></i></p>
            <p><i className="fa-solid fa-location-dot"></i></p>
            <p><i className="fa-solid fa-phone"></i></p>
            <p><i className="fa-solid fa-envelope"></i></p> 
          </div>
          <div  className=' ml-1 font-semibold p-2 flex flex-col justify-around h-60'>
            <p>{customer.name}</p>
            <p>{customer.address}</p>
            <p>{customer.phone}</p> 
            <p>{customer.email}</p>
          </div>   
        </div>
       
      </div>
      <div className=' w-full flex flex-col items-center lg:w-4/5 min-h-screen'>
          <h3 className='text-lg font-bold text-[#54d2d2] text-center'>My Orders</h3>
          <div  className=' py-1 ml-3 w-full px-2 text-[#54d2d2] font-semibold justify-between flex text-md'>
              <p className='w-[25%] text-center'>Order Id</p>
              <p className='w-[25%] text-center'>Type Of Order</p>
              <p className='w-[25%] text-center'>Quantity</p>
              <p className='w-[25%] text-center'>Price</p>  
            </div> 
        {/* card section */}
        <div className='flex flex-col w-full lg:ml-4 lg:flex-row flex-wrap items-center '>
          { tickets.length > 0? tickets.map((ticket)=> <Ticket key={ticket._orderId} {...ticket}/>) : <p className='text-red-500 mx-auto text-sm italic font-normal'>You have not made any order</p> }
        </div>
        <button className='text-white bg-[#54d2d2] w-48 md:w-56 py-2 rounded mt-3' onClick={()=> navigate('/Service')}>Make new Order</button>
      </div>

  </div>   
  )
}
export default MyOrders;