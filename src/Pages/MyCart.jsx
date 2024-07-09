
import { useContext } from 'react';
import MyCartSub from '../conponent/MyCartSub';
import MyCartSummary from '../conponent/MyCartSummary';
import { ContextProvider } from '../conponent/Context';
import MyCartHead from "../conponent/myCartHead";


const MyCart = () => {
  const collections = useContext(ContextProvider)
  return (
    <div>
        <MyCartHead/>
        
        <div className='md:flex justify-between gap-8 md:mx-24 mx-6 mt-6'>
        <MyCartSub collections={collections}/>
        <MyCartSummary/>

        </div>
        
      
    </div>
  )
}

export default MyCart
