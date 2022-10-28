import React from 'react'

function Ticket(props){
  return (
    <div className='flex ml-4 w-fit mt-2 bg-white border-2 border-[#54d2d2] text-[#54d2d2]'>
              <div className=' p-2 flex flex-col justify-around h-60'>
                <p>Order Id: </p>
                <p>Type Of Order:</p>
                <p>number Of Clothes:</p>
                <p>Pick Up Name:</p>
                <p>Pick Up Adress:</p>
                <p>Phone Number:</p> 
                <p>Total Price:</p> 
              </div>
              <div  className=' ml-1 p-2 flex flex-col justify-around h-60'>
                <p>{props._orderId} </p>
                <p>{props.typeOfOrder}</p>
                <p>{props.numberOfClothes}</p>
                <p>{props.pickUpName}</p>
                <p>{props.pickUpAddress}</p>
                <p>{props.phoneNumber}</p> 
                <p>{props.price}</p>  
              </div> 
            </div>
  )
}
export default Ticket