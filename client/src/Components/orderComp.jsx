import React from 'react';
import { useState } from 'react';


function OrderComp(props) {
 

  return (
    <div className='flex w-full mt-3 justify-between text-md lg:text-lg'>
        <p className='w-3/5'>{props.name}</p>
        <p className=''>N{props.price}</p>
        <input type="number" max={50} name="qty" id="qty" value={props.value} onChange={props.onChange} className='w-10 ml-2 h-6 bg-white' />
    </div>
  )
}

export default OrderComp;
