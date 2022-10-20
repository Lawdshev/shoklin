import React from 'react';
import pic1 from '../Images/tinywow_laundry-attendant-min_square.png'

function Hero() {
  return (
    <div className='bg-[#54d2d2] relative flex justify-center'>
        <div className='flex flex-col lg:flex-row bg-[#54d2d2] h-screen lg:py-1 lg:px-7'>
        <div className=' h-2/5 lg:h-3/5 w-full px-5 lg:w-4/5 flex flex-col items-center justify-center'>
            <h1 className='text-2xl lg:text-4xl font-bold'>Nigerian's First Choice In Dry Cleaning & Laundry Services</h1>
            <p className='text-sm lg:text-lg mt-3 font-semibold md:w-4/5 lg:w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ad asperiores illo aliquid autem mollitia est laborum dolor commodi debitis.</p>
            <button className='mt-3 bg-orange-400 px-2 py-3 rounded-md text-white font-semibold text-sm self-start md:self-center lg:self-start'>Sign Up For Free PickUp & Delivery</button>
        </div>
        <div className=' w-full h-2/4 lg:h-3/5 lg:w-3/5 items-center lg:items-baseline relative flex justify-center lg:justify-start lg:mt-4'>
            <img src={pic1} alt="" className='absolute rounded-full bg-[#488a8a] w-4/5  md:w-3/5 lg:w-4/5' />
        </div>
        </div>
        <div className='hidden h-32 lg:h-36 bg-[#fff] w-4/5 absolute bottom-0 mx-auto rounded-t-xl lg:flex items-center justify-around'>
            <div className=' flex flex-col  items-center justify-center text-white'>
                <div className="img rounded-none lg:rounded-full lg:bg-[#488a8a73] p-3">
                <img src="https://img.icons8.com/ios/32/000000/overlock-machine.png" className='w-3/5 lg:w-full'/>
                </div>
                <p className='text-[#488a8a] flex-wrap font-semibold text-md'>Amends</p>
            </div>    
            <div className=' flex flex-col  items-center justify-center text-white'>
                <div className="img rounded-none lg:rounded-full lg:bg-[#488a8a73] p-3">
                    <img src="https://img.icons8.com/pastel-glyph/32/000000/washing-machine--v2.png" className='w-3/5 lg:w-full '/>
                </div>
                <p className='text-[#488a8a] flex-wrap font-semibold text-md'>Laundry</p>
            </div>    
            <div className=' flex flex-col  items-center justify-center text-white'>
                <div className="img rounded-none lg:rounded-full lg:bg-[#488a8a73] p-3">
                <img src="https://img.icons8.com/ios-glyphs/32/000000/iron.png" className='w-3/5 lg:w-full'/>
                </div>
                <p className='text-[#488a8a] flex-wrap font-semibold text-md'>Ironing</p>
            </div>    
        </div>
    </div>
  )
}
export default Hero;
