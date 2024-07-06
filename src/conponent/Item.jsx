import React from 'react'
import rate from "../assets/rate.png"
import ratee from "../assets/ratee.png";
import collections from '../assets/collections';

const Item = (props) => {
  return (
    <div>
        <img src={props.image} alt="" />
        <p> {props.name}</p>
        <p>NGN{props.price}</p>
        <div className='flex gap-1'>
            <img src={rate} alt="rate" />
            <img src={rate} alt="rate" />
            <img src={rate} alt="rate" />
            <img src={rate} alt="rate" />
            <img src={ratee} alt="ratee" />
        </div>


      
    </div>
  )
}

export default Item
