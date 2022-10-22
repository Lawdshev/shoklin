import React from 'react'

function MyOrders() {
  return (
    <div className='flex flex-col justify-around lg:flex-row p-4 min-h-screen'>
        <div className='bg-[#54d2d2] w-full lg:w-2/5 p-4 ml-2'>
          <div className="flex  w-full justify-around items-center text-xl font-bold">
            <div className="rounded-full bg-red-100 h-40 w-40"></div>
            <h3 className='text-white'>Welcome Sherif...</h3>  
          </div>
          <div className='flex flex-row w-fit mt-2 text-white border-2 border-[#54d2d2]'>
            <div className=' p-2 flex flex-col justify-around h-60'>
              <p>Full Name:</p>
              <p>Pick Up Address:</p>
              <p>Phone Number:</p> 
            </div>
            <div  className=' ml-1 p-2 flex flex-col justify-around h-60'>
              <p>Pick Up Name:</p>
              <p>Pick Up Adress:</p>
              <p>Phone Number:</p> 
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
            <div className='flex ml-4 w-fit mt-2 bg-white border-2 border-[#54d2d2] text-[#54d2d2]'>
              <div className=' p-2 flex flex-col justify-around h-60'>
                <p>Order Id: </p>
                <p>Type Of Order:</p>
                <p>number Of Clothes:</p>
                <p>Pick Up Name:</p>
                <p>Pick Up Adress:</p>
                <p>Phone Number:</p> 
              </div>
              <div  className=' ml-1 p-2 flex flex-col justify-around h-60'>
                <p>OrderId: </p>
                <p>Type Of Order:</p>
                <p>number Of Clothes:</p>
                <p>Pick Up Name:</p>
                <p>Pick Up Adress:</p>
                <p>Phone Number:</p> 
              </div> 
            </div>
          </div>
        </div>

    </div>
  )
}

export default MyOrders