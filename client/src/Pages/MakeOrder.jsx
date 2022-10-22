import React from 'react';
import OrderComp from '../Components/orderComp';

function MakeOrder() {
  return (
    <div className='min-h-screen p-4 flex flex-col items-center '>
      <h1 className='text-xl lg:text-2xl font-bold'>Dry Cleaning</h1>
      <h2 className='mt-2'>Choose the categories of the clothes you have for laundry and their quantities, we'll give you an estimate right before you place your Order</h2>
      <div className='flex bg-black'>
          <div className="left bg-[#54d2d2]">
            <OrderComp/>
          </div>
          <div className="right bg-[#54d2d2]">

          </div>
      </div>
    </div>
  )
}

export default MakeOrder
