import React from 'react';
import image from './Images/VIP.png';
import sticker from './Images/VIP sticker.png'
import './Styles/VIP.css'

function VIP() {
  return (
    <div className='flex flex-col p-8 h-screen vipDiv'>
        <div className='h-1/2 w-full relative vipImgDiv'>
           <img src={image} className='w-full bg-[#54d2d2] rounded-full h-full'/>
           <img src={sticker} className='w-32 absolute -right-1 top-4'/>
        </div>
        <div className='w-full flex flex-col vipTextDiv mt-4'>
            <h1 className='mb-2 text-xl font-bold'>Get VIP treatment</h1>
            <p className='mb-2'>VIP Express Service is a comprehensive laundry solution tailored for busy families. Not just that you don"t have to wait at our counter, this service ensure quick and efficient checkout, automatic billing and 24 hours to our service</p>
            <button className='self-start border-solid border-2 border-[#54d2d2] p-2 rounded-xl' >Become a VIP</button>
        </div>
    </div>
  )
}

export default VIP;
