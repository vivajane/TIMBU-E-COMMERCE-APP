import React from 'react'
import CartSub from '../conponent/CartSub'
import CartForm from '../conponent/CartForm'
import CartCheck from '../conponent/CartCheck'
import MyCartSummary from '../conponent/MyCartSummary'
import OrderSummary from '../conponent/OrderSummary'

const Cart = () => {
  return (
    <div className='md:px-24 px-6'>
        <CartCheck/>
        <div className='md:flex justify-between block'>
        {/* <CartSub/> */}
       <div>
       <CartForm/>
       </div>
       <div className='md:mt-4'> {<OrderSummary/>}</div>
      
    </div>
    </div>
    
  )
}

export default Cart
