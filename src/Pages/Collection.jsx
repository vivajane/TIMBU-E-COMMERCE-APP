import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// const Collections = [
//   {
//     id: "1",
//     name: "All",
//     link: "all",
//   },
//   {
//     id: "2",
//     name: "T-Shirts",
//     link: "tshirts",
//   },
//   {
//     id: "3",
//     name: "Hoodies",
//     link: "hoodies",
//   },
//   {
//     id: "4",
//     name: "Sweat-Shirts",
//     link: "sweatshirts",
//   },
// ];

const Collection = () => {
  // const [active, setActive] = useState(null);
  // const onClickHandler = (id) => {
  //   setActive(id !== active ? id : null);
  // };
  return (
    <div className="md:px-24 pt-14 pb-4 px-6">
      <h1 className="text-center font-extrabold md:text-4xl ">
        Discover Our Exclusive Collection
      </h1>
      <p className="text-center py-2 md:text-base  text-sm">
        Shop the latest trends and find your perfect match
      </p>
      <div className=" md:px-24 pt-2 md:gap-14 flex gap-4 font-extrabold justify-center items-center">
        
        <h1 className="md:text-2xl text-xl"><span className="text-amber-950 px-2">Latest</span><span className="text-grays-900">Collections</span></h1>
      </div>
    </div>
  );
};

export default Collection;
