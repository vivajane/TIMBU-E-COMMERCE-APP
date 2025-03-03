
import collections from '../assets/collections';
import { useContext } from 'react';
import Item from './Item';
import { ContextProvider } from './Context';

const Category = (props) => {
  const {collections} = useContext(ContextProvider);
  console.log(collections,"from item")
  
  return <div className='md:grid grid-cols-4 md:px-24 py-2 md:gap-5 flex flex-col justify-center items-center'>
    
    {
      collections && collections.map((collection) => {
        if(props.category === collection.category){
          return <Item key= {collection.id} name={collection.name} price={collection.price} image={collection.image} id={collection.id}/>
          
        } else
        return null
        
          
        
      })
    }
  </div>
}

export default Category
