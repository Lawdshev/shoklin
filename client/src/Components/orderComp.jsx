import React from 'react';
import {DryCleaningPriceList} from '../Utilities/priceList';
import { useState } from 'react';
import { useEffect } from 'react';


function OrderComp(props) {
  const [value,setValue] = useState(0);


  const increase = () => {
    setValue(prevState => prevState + 1)
  }

  const decrease = () => {
    if (value <= 0 ) {
      setValue(0)
    }
    {
      setValue(prevState => prevState - 1)
    }
  }
   
  useEffect(() => {
    const item = DryCleaningPriceList.find(c=>c.id == props.id);
    value == '' || value < 0 ? item.qty = 0 :  item.qty = value;
    props.sumQty();
    props.sumPrice()
  }, [value])
  

  
  return (
  <>
    {/* <div className='flex w-full mt-3 justify-between text-md lg:text-lg'>
        <p className='w-3/5'>{props.name}</p>
        <p className=''>N{props.price}</p>
        <input type="number" max={50} name="qty" value={value} onChange={handleChange} className='w-10 ml-2 h-6 bg-white' />
    </div> */}
    <div className='flex flex-col w-full'>
      <div className='flex w-full px-4 mt-3 justify-between items-center text-md lg:text-lg h-44'>
        <img src={props.img} className='h-24 w-24 rounded-full' />
        <div className='flex flex-col text-center'>
          <p>{props.name}</p>
          <p>₦{props.price}</p>
        </div>
        <div className='flex bg-white w-24 h-8 justify-between border-[1px] border-solid border-black'>
          <button onClick={decrease} className='border-r-[1px] border-r-solid border-r-black w-[33%]'>-</button>
          <div className='flex items-center'>{value}</div>
          <button onClick={increase} className='border-l-[1px] border-l-solid border-l-black w-[33%]'>+</button>
        </div>
    </div>
      <hr />
    </div>
 </>
    
  )
}
export default OrderComp;
