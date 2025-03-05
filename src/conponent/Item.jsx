import rate from "../assets/rate.png";
import ratee from "../assets/ratee.png";
import collections from "../assets/collections";
import { NavLink } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="text-center  p-0 m-0">
      <NavLink className="block hover:scale-110 transition ease-in-out p-0 m-0" to={`/addtocart/${props.id}`}>
        <img 
          src={props.image}
          alt={props.name}
          className="pt-4  h-auto  w-auto"
        />
      </NavLink>

      <p className="pt-3 text-xs sm:text-sm md:text-base font-bold line-clamp-1">
        {" "}
        {props.name}
      </p>
      <p className="font-bold text-xs sm:text-sm md:text-base">
        NGN{props.price}
      </p>
      <div className="flex justify-center pb-4">
        <img
          className="w-3  h-3 md:w-4 md:h-4 lg:w-6 lg:h-6"
          src={rate}
          alt="rate"
        />
        <img
          className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6"
          src={rate}
          alt="rate"
        />
        <img
          className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6"
          src={rate}
          alt="rate"
        />
        <img
          className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6"
          src={rate}
          alt="rate"
        />
        <img
          className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6"
          src={ratee}
          alt="ratee"
        />
        <p className="text-xs md:text-sm lg:text-base">(4.7)</p>
      </div>
    </div>
  );
};
// const Item = (props) => {
//   return (
//     <div className='text-center'>
//       <NavLink to= {`addtocart/${props.id}`}>
//       <img src={`https://api.timbu.cloud/images/${props.photos}`} alt={props.name}  className='pt-4 h-72 object-cover w-full' />
//       </NavLink>

//         <p className='pt-3 font-bold line-clamp-1'> {props.name}</p>
//         <p className='font-bold'>NGN{props.price}</p>
//         <div className='flex gap-1 md:ml-11 ml-24 pb-4'>
//             <img src={rate} alt="rate" />
//             <img src={rate} alt="rate" />
//             <img src={rate} alt="rate" />
//             <img src={rate} alt="rate" />
//             <img src={ratee} alt="ratee" />
//             <p>(4.7)</p>
//         </div>

//     </div>
//   )
// }

export default Item;
