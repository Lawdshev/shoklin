import React from 'react';

function DryCleaningCard(props) {
  return (
        <div className='h-64 w-full md:w-64 flex items-center justify-around md:flex-col md:h-72 md:mt-4'>
            <img src={props.img} className='h-52 w-52 rounded-full'/>
            <div className='text-center flex flex-col w-40 text-white justify-around ml-4 text-lg'>
                <p>{props.name}</p>
                <p>₦{props.price}</p>
            </div>
       </div> 
  )
}

export default DryCleaningCard