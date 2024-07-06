import React from 'react';
import { NavLink } from 'react-router-dom';
const Collections = [
    {
        id: "1",
        name: "All",
        link: "/all"
    },
    {
        id: "2",
        name: "T-Shirts",
        link: "/tshirts"
    },
    {
        id: "3",
        name: "Hoodies",
        link: "/hoodies"
    },
    {
        id: "1",
        name: "Sweat-Shirts",
        link: "/sweatshirts"
    },
]

const Collection = () => {
  return (
    <div className='md:px-24 px-6'>
        <h1 className='text-center md:font-extrabold md:text-4xl'>Discover Our Exclusive Collection</h1>
        <p className='text-center py-2 md:text-base  text-sm'>Shop the latest trends and find your perfect match</p>
        <ul className='flex justify-center md:gap-10 gap-4 py-6  '>
            {
                Collections.map((collection) => (
                    <li key={collection.id} className='hover:font-extrabold' >
                        <NavLink to={collection.link}>{collection.name}</NavLink>
                    </li>
                ))
            }
        </ul>
      
    </div>
  )
}

export default Collection
