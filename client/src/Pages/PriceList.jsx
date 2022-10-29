import React from 'react'
import PriceListCard from '../Components/PriceListCard';
import Tailoring from '../Components/Tailoring';
import { DryCleaningPriceList, ironingPriceList } from '../Utilities/priceList';

function PriceList () {
  return (
    <div>
        <div className='w-full text-center p-3 md:w-4/5 mx-auto mt-4'>
          <h1 className='md:text-4xl text-2xl font-black'>Price List</h1>
          <p className='md:text-xl text-md mt-1'>We treat your garments with the utmost care.Dress Shirts are ₦200 and most garments start at ₦250 See below for our full price list and place-order.</p>
        </div>
        <h2 className='text-center mt-4 text-xl md:text-2xl'>Dry Cleaning price List</h2> 
        <div className='bg-[#54d2d2] flex flex-col items-center justify-around px-16 md:flex-row md:flex-wrap p-4 mt-8'>
            {DryCleaningPriceList.map((price) => {
              return <PriceListCard key={price.id} {...price}/>
            })}
        </div>
        <h2 className='text-center mt-4 text-xl md:text-2xl'>Ironing price List</h2> 
        <div className='bg-[#54d2d2] flex flex-col items-center justify-around px-16 md:flex-row md:flex-wrap p-4 mt-8'>
            {ironingPriceList.map((price) => {
              return <PriceListCard key={price.id} {...price}/>
            })}
        </div>
        <Tailoring />
    </div>
  )
}

export default PriceList;