import '../App.css';
import React from 'react';


function Footer () {
    return (
    <div className='bg-white text-[#54d2d2] flex justify-around py-4' id='footer'>
      <div className='flex flex-col w-12 items-center justify-between h-28 pt-2' id='socials'>
        <i className="fa-brands fa-instagram text-sm font-black"></i>
        <i className="fa-brands fa-facebook-f text-sm font-black"></i>
        <i className="fa-brands fa-twitter text-sm font-black"></i>
      </div>
      <div className='flex justify-around w-4/5' id='footer-words'>
        <div className='flex flex-col justify-between h-40' id='footer-word'>
          <h1 className='text-sm md:text-md lg:text-lg font-black' id='heading'>Service</h1>
          <h3 className='text-xs md:text-sm lg:text-md font-normal' id='heading-two'>Dry Cleaning</h3>
          <h3 className='text-xs md:text-sm lg:text-md font-normal' id='heading-two'>Shoe Cleaning</h3>
          <h3 className='text-xs md:text-sm lg:text-md font-normal' id='heading-two'>Flat Ironing</h3>
          <h3 className='text-xs md:text-sm lg:text-md font-normal' id='heading-two'>Repairs</h3>
        </div>
        <div className='flex flex-col justify-between h-40' id='footer-word'>
          <h1 className='text-sm md:text-md lg:text-lg font-black' id='heading'>Additional Service</h1>
          <h3 className='text-xs md:text-sm lg:text-md font-normal' id='heading-two'>24 hours Service</h3>
          <h3 className='text-xs md:text-sm lg:text-md font-normal' id='heading-two'>Fast pickup and delivery</h3>
          <h3 className='text-xs md:text-sm lg:text-md font-normal' id='heading-two'>Same day dry cleaning</h3>
          <h3 className='text-xs md:text-sm lg:text-md font-normal' id='heading-two'>VIP express</h3>
        </div>
    </div> 
</div>
)
}

export default Footer;