import React, { useEffect } from "react";
import collections from "../assets/collections";
import { MdDelete } from "react-icons/md";
import pic from "../assets/imgone.png";
import { useContext } from "react";
import { ContextProvider } from "./Context";
import { getSingleCollection } from "../assets/collections";
const MyCartSub = () => {
  const { totalCartAmount, collections, cart, removeCart, addCart,clearCart } =
    useContext(ContextProvider);
  (
    <div className=" ">
      {collections &&
        collections.map((e) => {
          if (cart[e.id] > 0) {
            return (
              <div
                key={e.id}
                className="flex justify-between gap-32 flex-1 md:px-3 px-2 border border-gray-400 py-6"
              >
                <div className="flex gap-3 ">
                  <img src={e.image} alt="" className="md:w-[240px]  h-fit" />
                  <div>
                    <p className="font-bold text-sm md:text-base">{e.name}</p>
                    <p className="font-bold md:mt-10 mt-6">NGN{e.price}</p>
                  </div>
                </div>
                <div className="md:ml-44">
                  <div className=" mt-2">
                    <MdDelete onClick={()=> clearCart(e.id)}/>
                  </div>
                  <div className="bg-grays bg-gray-400 rounded flex w-10 justify-center text-center items-center md:mt-[110px] mt-[40px] px-6  ">
                    <button onClick={()=> removeCart(e.id)} className="px-1">-</button>
                    <button className="px-1">{cart[e.id]}</button>
                    <button  className="px-1"onClick={()=> addCart(e.id)}>+</button>
                  </div>
                </div>
                <hr className="border-gray-950 " />
              </div>
            );
          }
        })}
    </div>
  );
};

export default MyCartSub;
