import React from "react";

const Collections = [
  {
    id: "1",
    name: "All",
    link: "All",
  },
  {
    id: "2",
    name: "T-Shirts",
    link: "tshirts",
  },
  {
    id: "3",
    name: "Hoodies",
    link: "hoodies",
  },
  {
    id: "4",
    name: "Sweat-Shirts",
    link: "sweatshirts",
  },
];

const Collection = ({setFilter}) => {
  return (
    <div className='md:px-24 px-6'>
      <h1 className='text-center font-extrabold md:text-4xl '>
        Discover Our Exclusive Collection
      </h1>
      <p className='text-center py-2 md:text-base  text-sm'>
        Shop the latest trends and find your perfect match
      </p>
      <ul className=' md:px-24 py-2 md:gap-14 flex gap-4 font-extrabold justify-center items-center'>
        {Collections.map((collection) => (
          <li
            key={collection.id}
            className='hover:font-extrabold hover:cursor-pointer'
            onClick={() => setFilter(collection.link)}
          >
            {collection.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collection;