import React from "react";
import collections from "../assets/collections";
import { MdDelete } from "react-icons/md";
import pic from "../assets/imgone.png";
import { useContext } from "react";
import { ContextProvider } from "./Context";
const MyCartSub = () => {
  const { totalCartAmount, collections, cart, removeCart, addCart } =
    useContext(ContextProvider);
  return (
    <div className=" ">
      {collections &&
        collections.map((e) => {
          if (cart[e.id] > 0) {
            return (
              <div
                key={e.id}
                className="flex justify-between gap-32 flex-1 md:px-3 px-2 border border-gray-400 py-6"
              >
                <div className="flex gap-3">
                  <img src={e.image} alt="" className="w-[240px] h-fit" />
                  <div>
                    <p className="font-bold">{e.name}</p>
                    <p className="font-bold mt-20">NGN{e.price}</p>
                  </div>
                </div>
                <div className="ml-44">
                  <div className=" mt-2">
                    <MdDelete onClick={()=> removeCart(e.id)}/>
                  </div>
                  <div className="bg-grays bg-gray-400 rounded flex w-10 justify-between text-center items-center mt-20 ">
                    <button onClick={()=> removeCart(e.id)} className="">-</button>
                    <button>{cart[e.id]}</button>
                    <button onClick={()=> addCart(e.id)}>+</button>
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
