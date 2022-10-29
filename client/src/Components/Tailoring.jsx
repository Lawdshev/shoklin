import React from 'react'

function Tailoring() {
  return (
    <div>
        <h2 className='text-center mt-4 text-xl md:text-2xl'>Tailoring and Alteration</h2>
        <div className='bg-[#54d2d2] flex flex-col items-center justify-around px-16 md:flex-row md:flex-wrap p-4 mt-8'>
          <div className='bg-white w-[95%] md:w-1/2  flex flex-col text-center items-center justify-between p-8 min-h-[530px]'>
            <h3 className='md:text-2xl font-bold text-xl'> Alterations & Tailoring</h3>
            <p className=' text-sm md:text-lg'>Our professional tailors have extensive experience in adapting your clothing to fit and flatter your specific body type. We have one goal in mind to give you the perfect fit. Our Tailoring and Alteration Service are done offline. However, we realize that you have a busy schedule, so we aim to make the process convenient by providing online appointment booking and expedited delivery of select services (at additional cost).</p>
            <button className='bg-[#154b4b] text-white px-4 py-2 text-sm md:text-lg'>Book an appointment now</button>
          </div>   
        </div>
    </div>
  )
}

export default Tailoring