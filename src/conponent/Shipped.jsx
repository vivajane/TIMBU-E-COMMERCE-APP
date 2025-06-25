import React from 'react'
import { useNavigate } from 'react-router-dom'

const Shipped = ({setShowShipping, setShowModal}) => {
    const navigate = useNavigate()
  return (
    <div onClick={() => {setShowShipping(false) || setShowModal(true)}} className='bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0'>
        <div className='bg-white space-y-2 p-4  rounded-md shadow-md '>
            <h1>Order Placed Successfully</h1>
            <p>Delivery will be made in 24 hours</p>
            <div>
                <button onClick={() => navigate("/")} className='bg-[#0000FF] rounded-md py-2 px-9 text-white mt-4 hover:bg-[#00A2B0]'>Thank you for shopping with us</button>
            </div>
            <p></p>
        </div>
      
    </div>
  )
}

export default Shipped
