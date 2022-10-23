import React from 'react'

function OrderComp({name,price}) {
  return (
    <div className='flex w-full mt-3 justify-between text-md lg:text-lg'>
        <p className='w-3/5'>{name}</p>
        <p className=''>N{price}</p>
        <input type="number" max={50} name="qty" id="qty" className='w-10 ml-2 h-6 bg-white' />
    </div>
  )
}

export default OrderComp;
