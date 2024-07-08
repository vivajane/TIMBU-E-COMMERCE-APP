
import MyCartSub from '../conponent/MyCartSub';
import MyCartSummary from '../conponent/MyCartSummary';
import MyCartHead from "../conponent/myCartHead";


const MyCart = () => {
  return (
    <div>
        <MyCartHead/>
        
        <div className='md:flex justify-between gap-8 md:mx-24 mx-6 mt-6'>
        <MyCartSub/>
        <MyCartSummary/>

        </div>
        
      
    </div>
  )
}

export default MyCart
