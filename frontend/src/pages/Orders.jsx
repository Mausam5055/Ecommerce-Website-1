import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios';

const Orders = () => {

  const {backendUrl,token, currency} = useContext(ShopContext);
  const [orderData,setorderData]= useState([])

  const loadOrderData = async ()=>{
    try {
      if (!token) {
        return null
      }

      const response = await axios.post(backendUrl+'/api/order/userorders',{},{headers:{token}})
      let allOrdersItem = []
      response.data.orders.map((order)=>{
        order.items.map((item)=>{
          item['status']= order.status
          item['payment']= order.payment
          item['paymentMethod']= order.paymentMethod
          item['date']= order.date
          allOrdersItem.push(item)
        })
      })
      setorderData(allOrdersItem)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
     loadOrderData()
  },[token])
  return (
    <div className='pt-16 border-t'>
      <div className='text-2xl'>
        <Title text1={'YOUR'} text2={'ORDERS'} />
      </div>
      <div>
        {
          orderData.map((item, index) => (
            <div key={index} className='flex flex-col gap-4 py-4 text-gray-700 border-t border-b md:flex-row md:items-center md:justify-between'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="Photo" />
                <div>
                  <p className='font-medium sm:text-base'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                    <p className='text-lg'>{currency}&nbsp;{item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <p>Quantity:{item.quantity}</p>
                    <p>Size:{item.size}</p>
                  </div>
                  <p className='mt-1'>Date:&nbsp;<span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                  <p className='mt-1'>Payment:&nbsp;<span className='text-gray-400'>{item.paymentMethod}</span></p>
                </div>
              </div>
              <div className='flex justify-between md:w-1/2'>
                <div className='flex items-center gap-2'>
                  <p className='h-2 bg-green-500 rounded-full min-w-2'></p>
                  <p className='text-sm md:text-base'>{item.status}</p>
                </div>
                <button onClick={loadOrderData} className='px-4 py-2 text-sm font-medium border rounded-sm'>TRACK ORDER</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
