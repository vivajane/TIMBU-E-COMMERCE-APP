import React from 'react'
import CartSub from '../conponent/CartSub'
import CartForm from '../conponent/CartForm'
import CartCheck from '../conponent/CartCheck'

const Cart = () => {
  return (
    <div className='md:px-24 px-6'>
        <CartCheck/>
        <div className='flex '>
        
        <CartSub/>
        <CartForm/>
      
    </div>
    </div>
    
  )
}

export default Cart
