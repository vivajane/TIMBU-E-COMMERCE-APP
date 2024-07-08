import React from "react";
import { MdNavigateNext } from "react-icons/md";
const myCartHead = () => {
  return (
    <div>
      <div className="md:mx-24 mx-6">
        <div className="flex items-center gap-3">
          <h1>Home </h1>
          <div>
            <MdNavigateNext />
          </div>
          <h1>Cart</h1>
        </div>
        <h1 className="mt-4 font-bold text-2xl">My Cart</h1>
      </div>
    </div>
  );
};

export default myCartHead;
