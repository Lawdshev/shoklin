import React from 'react'

function Hero2() {
  return (
    <div className='h-screen relative flex justify-center bg-[#ffffff]'>
        <div className='hidden h-32 lg:h-40 bg-[#ffffffa8] w-4/5 absolute top-0 mx-auto rounded-t-xl lg:flex items-center justify-around shadow-xl'>
            <div className=' flex flex-col  items-center justify-center text-white'>
                <div className="img rounded-none lg:rounded-full lg:bg-[#488a8a73] p-3">
                <img src="https://img.icons8.com/pastel-glyph/32/000000/location-update--v1.png" className='w-3/5 lg:w-full'/>
                </div>
                <p className='text-[#488a8a] flex-wrap font-semibold text-md'>Pick up</p>
            </div>    
            <div className=' flex flex-col  items-center justify-center text-white'>
                <div className="img rounded-none lg:rounded-full lg:bg-[#488a8a73] p-3">
                <img src="https://img.icons8.com/windows/32/000000/deliver-food.png" className='w-3/5 lg:w-full '/>
                </div>
                <p className='text-[#488a8a] flex-wrap font-semibold text-md'>Delivery</p>
            </div>    
            <div className=' flex flex-col  items-center justify-center text-white'>
                <div className="img rounded-none lg:rounded-full lg:bg-[#488a8a73] p-3">
                <img src="https://img.icons8.com/pastel-glyph/32/000000/mobile-package-tracking.png" className='w-3/5 lg:w-full'/>
                </div>
                <p className='text-[#488a8a] flex-wrap font-semibold text-md'>Tracking</p>
            </div>    
        </div>
        <div className='w-full lg:mt-44 flex flex-col lg:flex-row' >
            <div className='w-full lg:w-2/4 h-96 bg-red-400'>
                <img src="https://media.istockphoto.com/photos/colorful-jeans-picture-id185932283?k=20&m=185932283&s=612x612&w=0&h=mowxUZQ_PZGxC5wErx2OOeYYjvLzm_1W6Va5qLHwF8Y=" alt="" className='w-full h-full'/>
            </div>
            <div className='w-full lg:w-2/4 h-96 p-4 justify-around flex flex-col py-4'>
                <h1 className='font-bold text-3xl lg:text-4xl'>Laundry is Easier With Dependable Cleaners</h1>
                <p className='text-lg lg:text-xl'>Get your cleaning done by the best in the business</p>
                <div className="flex flex-col justify-around">
                <span className='flex items-center justify-around w-full md:w-2/5 lg:w-3/5'>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/money-transfer.png"/>
                    <p>Wash And Fold By The Pound.</p>
                </span>
                <span className='flex items-center justify-around w-full md:w-2/5 lg:w-3/5'>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/money-transfer.png"/>
                    <p>Ease Of Pick Up And Delivery.</p>
                </span>
                <span className='flex items-center justify-around w-full md:w-2/5 lg:w-3/5'>
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/money-transfer.png"/>
                    <p>Great Services & Customers.</p>
                </span>
                <button className='text-white bg-[#54d2d2] w-48 px-1 py-2 rounded mt-3'>Make Your First Order</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero2