import React from 'react';
import collections from '../assets/collections';
import { MdDelete } from "react-icons/md";
import pic from "../assets/imgone.png"
const MyCartSub = () => {
  return (
    <div className=' '>
        {
            collections && collections.map((e) => (
                <div key={e.id} className='flex justify-between gap-32 flex-1 md:px-3 px-2 border border-gray-400 py-6'>
                    <div className='flex gap-3'>
                        <img src={pic} alt="" className='w-[240px] h-fit' />
                        <div>
                            <p className='font-bold'>Name</p>
                            <p className='font-bold mt-20'>NGN 12000</p>
                        </div>
                    </div>
                    <div className='ml-44'>
                        <div className=' mt-2'><MdDelete/></div>
                        <div className='bg-grays bg-gray-400 rounded flex w-10 justify-between text-center items-center mt-20 '>
                            <button className=''>-</button> |
                            <button>+</button>
                        </div>
                    </div>
                    <hr className="border-gray-950 " />

                </div>
                
            ))
        }
      
    </div>
  )
}

export default MyCartSub
