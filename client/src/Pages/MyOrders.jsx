import React,{useEffect, useState} from 'react';
import Ticket from '../Components/Ticket';

function MyOrders() {
  const [customer,setCustomer] = useState({})
  const [tickets,setTickets] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/customers')
    .then(res =>  res.json())
    .then((data )=> {
      setCustomer(data[0])
      setTickets(data[0].tickets)
    })
  }, [])
  


  return (
    <div className='flex flex-col justify-around lg:flex-row p-4 min-h-screen'>
        <div className='bg-[#54d2d2] w-full lg:w-2/5 p-4 ml-2'>
          <div className="flex  w-full justify-around items-center text-xl font-bold">
            <div className="rounded-full bg-red-100 h-40 w-40"></div>
            <h3 className='text-white'>Welcome {customer.name}</h3>  
          </div>
          <div className='flex flex-row w-fit mt-2 text-white border-2 border-[#54d2d2]'>
            <div className=' p-2 flex flex-col justify-around h-60'>
              <p>Full Name:</p>
              <p>Pick Up Address:</p>
              <p>Phone Number:</p> 
            </div>
            <div  className=' ml-1 p-2 flex flex-col justify-around h-60'>
              
              <p>{customer.name}</p>
              <p>{customer.address}</p>
              <p>{customer.phone}</p> 
            </div> 
          </div>
          <button className='text-[#54d2d2] rounded-lg p-2 bg-white'>Edit Information</button>
        </div>
        <div className=' w-full lg:w-3/5 min-h-screen'>
          <div className='flex w-full p-2  justify-between items-center ml-2'>
            <h3 className='text-lg font-bold text-[#54d2d2]'>My Orders</h3>
            <button className='bg-[#54d2d2] rounded-lg p-2 text-white'>New Order</button>
          </div>
          {/* card section */}
          <div className='flex flex-col lg:ml-4 lg:flex-row flex-wrap items-center '>
            {tickets.length == 0? <p>no orders yet</p> : tickets.map((ticket)=> <Ticket key={ticket.orderId} {...ticket}/>) }
          </div>
        </div>

    </div>
  )
}

export default MyOrders