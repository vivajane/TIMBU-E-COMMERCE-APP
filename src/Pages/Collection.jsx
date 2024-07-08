import React from 'react';
import { NavLink } from 'react-router-dom';
import collections from '../assets/collections';
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
        id: "4",
        name: "Sweat-Shirts",
        link: "/sweatshirts"
    },
]

const Collection = () => {
    // const [filter, setFilter] = useState(Collections)
    // const filteredCollections = collections.filter((collections) =>{
    //     if(filter === "All"){
    //         return collections
    //     } return collections.name === filter

    // })
   
  return (
    <div className='md:px-24 px-6'>
        <h1 className='text-center font-extrabold md:text-4xl '>Discover Our Exclusive Collection</h1>
        <p className='text-center py-2 md:text-base  text-sm'>Shop the latest trends and find your perfect match</p>
        <ul className='md:grid grid-cols-4 md:px-24 py-2 md:gap-5 flex flex-col justify-center items-center'>
            {
                Collections.map((collection) => (
                    <li key={collection.id} className='hover:font-extrabold'  >
                        <NavLink to={collection.link}>{collection.name}</NavLink>
                    </li>
                ))
            }
        </ul>
      
    </div>
  )
}

export default Collection
