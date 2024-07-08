import { useContext } from 'react'
import { useParams } from 'react-router-dom';
// import collections from '../assets/collections';
import { ContextProvider } from '../conponent/Context';
import Product from '../conponent/Product'
import ProductHead from '../conponent/ProductHead'

const AddToCart = () => {
  const {collections} = useContext(ContextProvider);
  const{addtocardId} = useParams();
  const product = collections.find((e) => e.id === Number(addtocardId))
  console.log(useParams())
  console.log(product, "ggg")
  return (
    <div>
      
      <ProductHead product= {product}/>
      <Product product= {product}/>
      
    </div>
  )
}

export default AddToCart
