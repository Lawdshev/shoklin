import React from 'react'
import DryCleaningCard from '../Components/DryCleaningCard';
import { priceList } from '../Utilities/priceList';

function DryCleaning() {
  return (
    <div>
        <div className='w-full text-center p-3 md:w-4/5 mx-auto mt-4'>
          <h1 className='md:text-4xl text-2xl font-black'>Dry Cleaning</h1>
          <p className='md:text-xl text-md mt-1'>We treat your garments with the utmost care.Dress Shirts are ₦200 and most garments start at ₦250 See below for our full price list and place-order.</p>
        </div> 
        <div className='bg-[#54d2d2] flex flex-col items-center justify-around px-16 md:flex-row md:flex-wrap p-4 mt-8'>
            {priceList.map((price) => {
              return <DryCleaningCard key={price.id} {...price}/>
            })}
        </div>
    </div>
  )
}

export default DryCleaning