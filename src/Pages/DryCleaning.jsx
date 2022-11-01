import React from 'react';
import axios from "axios"
import OrderComp from '../Components/orderComp';
import {DryCleaningPriceList} from '../Utilities/priceList';
import { useState,useEffect } from 'react';
import { useUserAuth } from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import { useLaundryContext } from "../contexts/laundryContexts";

function DryCleaning() {
  const {setLoading} = useLaundryContext()
  const navigate = useNavigate()
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const {user} = useUserAuth();
  const {handleShow} = useLaundryContext()
  const [customer,setCustomer] = useState({});
  const [itemsList,setItemsList] = useState([])
 
  const findUser=()=>{
    setLoading(true)
    fetch('https://shoklin-server.onrender.com/customers')
    .then(res =>  res.json())
    .then((data )=> {
      const customer = data.find(c=>c.email === user.email);
      if(!customer){
        handleShow('Please Login To Continue',"red")
        navigate('/SignIn')
      }
      setCustomer(customer)
      try {
        axios.post(`https://shoklin-server.onrender.com/customers/${customer._id}/addOrder`,{
        typeOfOrder: "Dry Cleaning",
        numberOfClothes: numberOfItems,
        price: totalPrice
        })
      } catch (error) {
        console.log(error)
      }
    })
    setLoading(false) 
  }

  const sumQty=() => {
    let sumItem = 0
    DryCleaningPriceList.forEach(item=> sumItem += parseInt(item.qty));
    setNumberOfItems(sumItem)  
  }

  const sumPrice=() => {
    let sumItem = 0
    DryCleaningPriceList.forEach(item=> sumItem += (parseInt(item.qty) * item.price ));
    setTotalPrice(sumItem) 
  }

  const handleOrder =()=>{
    if (numberOfItems < 1) {
      handleShow('You have not selected any item',"red");
      return
    }
    setLoading(true)
    findUser()
    navigate('/MyOrders');
    handleShow('Order placed succesfully',"green");
    setLoading(false)
  }

  return (
    <div className='min-h-screen p-4 flex flex-col items-center'>
      <h1 className='text-xl lg:text-2xl font-bold'>Dry Cleaning</h1>
      <h2 className='mt-2'>Choose the categories of the clothes you have for laundry and their quantities, we'll give you an estimate right before you place your Order</h2>
      <div className='flex flex-col items-center md:flex md:flex-row md:items-start justify-around w-full mt-8'>
          <div className=" bg-white w-full lg:w-2/5 text-[#41acac] flex flex-col shadow-2xl">
            <p className='font-semibold self-center text-2xl mt-4'>categories</p>
            {
              DryCleaningPriceList.map((cat)=>{
                return <OrderComp key={cat.name} List={DryCleaningPriceList} sumQty={sumQty} sumPrice={sumPrice} id={cat.id} {...cat} itemsList={itemsList} setItemsList={setItemsList} />
              })
            }
          </div>
          <div className=" bg-white w-full lg:w-2/5 flex flex-col shadow-2xl items-center justify-around">
              <div className='flex flex-col w-full'>
                <div className='items-center flex bg-[#e0dfdf] w-full h-12 justify-center'>
                   <h1 className='text-xl font-semibold'>Order Details</h1>
                </div> 
                <span className='flex justify-between w-full px-4 mt-4'>
                    <p className='font-semibold text-lg'>Category</p>
                    <p className='font-semibold text-lg'>Number Of Items</p>
                  </span> 
                {
                  itemsList.length > 0 && itemsList.map((item)=>{
                   return item.qty > 0 && <span className='px-16 flex justify-between mt-2 text-md font-medium'>
                    <p>{item.name}</p>
                    <p>{item.qty}</p>
                   </span> 
                  })
                }
                <div className='bg-[#e0dfdf] flex flex-col items-center mt-8 justify-around py-4'>
                  <span className='flex justify-between w-full px-4 mt-2'>
                      <p  className='font-semibold text-lg'>Total Number of items:</p>
                      <p  className='font-semibold text-lg'>{numberOfItems}</p>
                    </span>
                    <span className='flex justify-between w-full px-4'>
                      <p className='font-semibold text-lg'>Total Price:</p>
                      <p className='font-semibold text-lg'>N{totalPrice}</p>
                    </span>
                  <button className='bg-black py-2 px-4 text-white rounded-xl' onClick={handleOrder}>Place Order</button>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}
export default DryCleaning
