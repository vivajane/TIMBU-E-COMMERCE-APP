"use client"
import { useState, useEffect } from 'react';
import { useContext } from 'react'
import { ContextProvider } from './Context';
import Item from './Item';


const Related = ({showFilter, types}) => {
    const [related, setRelated] = useState([]);
    const {collections} = useContext(ContextProvider);
    useEffect(() => {
        if(collections.length > 0){
            let productCopy = [...collections];
            productCopy = productCopy.filter((item) => showFilter === item.showFilter )
            productCopy = productCopy.filter((item) => types === item.types )
            console.log(productCopy, "from related");
            setRelated(productCopy.slice(0, 4));
            
        }
    },[collections, showFilter, types])

  return (
    <div>
      <h1 className="md:text-2xl text-sm pt-7 pb-2 text-center sm:text-xl">RELATED PRODUCTS</h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {
            related.map((item) => (<Item key={item.id} category={item.category} name={item.name} price={item.price} image={item.image} id={item.id}/>))
        }
      </div>
    </div>
  )
}

export default Related
