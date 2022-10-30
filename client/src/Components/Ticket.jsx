import React from 'react'

function Ticket(props){
  return (
    <div className='flex w-full bg-white px-4 border-2  text-[#54d2d2]'>
        {/* <div className=' ml-1 py-1 justify-between flex flex-col text-[20px]'>
                <p>Order Id: </p>
               <p>Type Of Order:</p>
               <p>number Of Clothes:</p>
               <p>Total Price:</p> 
      </div>  */}
              
              <div  className=' py-1 w-full text-black px-2 justify-between flex text-sm'>
                <p className='w-[20%] text-center'>{props._orderId} </p>
                <p className='w-[20%] text-center'>{props.typeOfOrder}</p>
                <p className='w-[20%] text-center'>{props.numberOfClothes}</p>
                <p className='w-[20%] text-center'>{props.price}</p>  
              </div> 
            </div>
  )
}
export default Ticket

