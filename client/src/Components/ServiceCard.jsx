import React from 'react';
import image from '../Images/tinywow_laundry-attendant-min_square.png'

function ServiceCard(props) {
  return (
    <div className='md:w-72 h-[530px] bg-[#f0eeee] px-2 py-3 flex flex-col items-center justify-between w-full mt-2'>
        <img src={props.img} className='h-52 w-[90%] bg-[#256b6b] lg:w-56 md:w-4/5'/>
        <div className='text-center w-[90%] h-56 mt-2 md:w-4/5'>
           <h1 className='text-2xl font-black'>{props.name}</h1>
           <p className='text-md mt-2'>{props.description}</p>
        </div>
        <button className='bg-[#54d2d2] text-white px-4 py-3 w-[90%] md:w-4/5 hover:shadow-xl'>{`${props.name} Services`}</button>
    </div>
  )
}

export default ServiceCard;