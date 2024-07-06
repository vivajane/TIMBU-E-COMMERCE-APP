import React from 'react';
import Item from '../conponent/Item';
import collections from '../assets/collections';

const HeroCollections = () => {
  return (
    <div className='md: grid grid-cols-4 md:px-24 py-2 gap-5'>
        {
            collections.map((collection) => (
                <Item key={collection.id} name={collection.name} price = {collection.price} image= {collection.image}/>
            ))
        }
      
    </div>
  )
}

export default HeroCollections
