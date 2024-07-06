import React from 'react'
import rate from "../assets/rate.png"
import ratee from "../assets/ratee.png";
import collections from '../assets/collections';

const Item = (props) => {
  return (
    <div className='text-center'>
        <img src={props.image} alt="img" className='pt-4' />
        <p className='pt-3 font-bold'> {props.name}</p>
        <p className='font-bold'>NGN{props.price}</p>
        <div className='flex gap-1 md:ml-11 ml-24 pb-4'>
            <img src={rate} alt="rate" />
            <img src={rate} alt="rate" />
            <img src={rate} alt="rate" />
            <img src={rate} alt="rate" />
            <img src={ratee} alt="ratee" />
            <p>(4.7)</p>
        </div>


      
    </div>
  )
}

export default Item
