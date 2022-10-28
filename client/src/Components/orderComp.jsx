import React from 'react';
import {DryCleaningPriceList} from '../Utilities/priceList';
import { useState } from 'react';
import { useEffect } from 'react';


function OrderComp(props) {
  const [value,setValue] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value)
  }
  const setQty = () => {
    const item = DryCleaningPriceList.find(c=>c.id == props.id);
    item.qty = value;
    props.sumQty();
    props.sumPrice()
  }
  return (
    <div className='flex w-full mt-3 justify-between text-md lg:text-lg'>
        <p className='w-3/5'>{props.name}</p>
        <p className=''>N{props.price}</p>
        <input type="number" max={50} name="qty" value={value} onChange={handleChange} className='w-10 ml-2 h-6 bg-white' />
        <button className='border-2 border-white' onClick={setQty}>Add</button>
    </div>
  )
}
export default OrderComp;
