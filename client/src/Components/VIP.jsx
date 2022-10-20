import React from 'react';
import image from '../Images/VIP.png';
import sticker from '../Images/VIP sticker.png'


function VIP() {
  return (
    <div className='flex flex-col lg:flex-row h-screen vipDiv items-center justify-center md:justify-around'>
        <div className='h-1/2 lg:h-4/5 w-4/5 relative vipImgDiv'>
           <img src={image} className='w-full bg-[#54d2d2] rounded-full h-full lg:ml-3'/>
           <img src={sticker} className='w-32 absolute -right-1 md:right-14 lg:right-9 top-4'/>
        </div>
        <div className='w-full flex flex-col vipTextDiv mt-4 px-4 md:text-xl lg:ml-10'>
            <h1 className='mb-2 text-xl lg:text-4xl font-bold'>Get VIP treatment</h1>
            <p className='mb-2 lg:text-xl lg:w-4/5'>VIP Express Service is a comprehensive laundry solution tailored for busy families. Not just that you don"t have to wait at our counter, this service ensure quick and efficient checkout, automatic billing and 24 hours to our service</p>
            <button className='self-start border-solid border-2 border-[#54d2d2] p-2 rounded-xl lg:text-xl hover:bg-[#54d2d2]' >Become a VIP</button>
        </div>
    </div>
  )
}

export default VIP;
