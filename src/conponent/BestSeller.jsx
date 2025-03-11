import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "./Context";
import Item from "./Item";

const BestSeller = () => {
  const { collections } = useContext(ContextProvider);
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    setBestSeller(collections.slice(4, 12));
    // console.log(collections, "from best seller");
  }, [collections]);
  return (
    <div>
      <div className=" pt-2 md:gap-14 flex gap-4 font-extrabold justify-center items-center">
        <h1 className="md:text-2xl text-sm  sm:text-xl">
          <span className="text-amber-950 px-2">Our</span>
          <span className="text-grays-900">Best Sellers</span>
        </h1>
      </div>
      <div
        className="grid md:grid-cols-3 md:px-24 px-2 md:gap-5 lg:grid-cols-4 grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-3  py-2 "
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        {bestSeller && bestSeller.map((best) => {
          return (
            <div key={best.id}>
              <Item
                key={best.id}
                name={best.name}
                price={best.price}
                image={best.image}
                id={best.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSeller;
