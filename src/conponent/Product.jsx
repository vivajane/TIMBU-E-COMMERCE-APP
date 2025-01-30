import { useContext } from "react";
import cart from "../assets/carts.png";
import rate from "../assets/rate.png";
import ratee from "../assets/ratee.png";
import fav from "../assets/favourite.png";
import { CiCreditCard1 } from "react-icons/ci";
import { MdLocalShipping } from "react-icons/md";
import { NavLink, Outlet} from "react-router-dom";
import { ContextProvider } from "./Context";


const Product = (props) => {
  // const [collections, setCollections] = useState({});
  
  const { product } = props;
  const{addCart} = useContext(ContextProvider)
 
  return (
    <div className="md:px-24 px-6 my-16">
      <div className="md:flex gap-36">
        {product.image &&
          <div>
          <img src={product.image}alt="j" className="w-[500px] h-fit" />
          <div className="flex gap-4 my-8">
            <img
              className="lg:w-[100px] w-[73px] md:w-[65px] rounded h-fit"
              src={product.image} alt={product.name}
            />
            <img
              className="lg:w-[100px] md:w-[65px]  w-[73px] rounded h-fit"
              src={product.image}
              alt="imgg"
            />
            <img
              className="lg:w-[100px] md:w-[65px] w-[73px] rounded h-fit"
              src={product.image}
              alt="imgl"
            />
            <img
              className="lg:w-[100px] md:w-[65px] w-[73px] rounded h-fit"
              src={product.image}
              alt="imgp"
            />
          </div>
        </div>
        }
        <div>
          <h1 className="font-extrabold md:text-xl">{product.name}</h1>
          <div>
            <div className="flex gap-8 py-2 md:justify-between lg:justify-between ">
              <div className="flex md:w-6 ">
                <img src={rate} alt="rate" />
                <img src={rate} alt="rate" />
                <img src={rate} alt="rate" />
                <img src={rate} alt="rate" />
                <img src={ratee} alt="ratee" />
              </div>
              <p>157 review</p>
            </div>
            <p className="font-extrabold md:text-xl py-2">NGN{product.price}</p>
            <p className="pt-2">Save 50% right now</p>
            <h1 className="font-extrabold pt-4 md:text-xl pb-2">Features:</h1>
            <ul>
              <li className="list-disc py-2">Made with full cotton</li>
              <li className="list-disc py-2">Slim fit for any body</li>
              <li className="list-disc py-2">Quality control by JC</li>
            </ul>
            <div className="flex">
              <div className="">
                <button onClick={() => addCart(product.id)} className=" bg-amber-950 text-white md:px-10 md:py-2 px-20 py-2 rounded my-12">
                  <NavLink className="flex gap-8" to="/mycart">
                  <span>Add to cart </span>
                <img
                  src={cart}
                  alt="hh"
                  className="md:w-8 md:h-fit"
                />
                </NavLink>
                </button>
                
              </div>
              <img
                className="w-[30px] md:absolute md:top-[55px] bg-grays bg-gray-400 rounded md:right-[55px] h-fit px-1 py-1 right-[10px] md:block hidden top-[100px]"
                src={fav}
                alt="g"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 py-2">
                <MdLocalShipping />
                <p>Free shipping nationwide</p>
              </div>
              <div className="flex items-center gap-2 py-2">
                <CiCreditCard1 />
                <p>100% Secured Payment</p>
              </div>
              <p className="py-2">Made by Professionals</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-14 pt-10">
        <NavLink to="description">Description</NavLink>
        <NavLink to="reviews">
          Reviews{" "}
          <span className="bg-grays bg-gray-400 px-2 py-1 rounded-full {({isActive}) => ({
            className: isActive ? '<hr/>' : ''})}">
            (157)
          </span>
        </NavLink>
        <NavLink to="support">Support</NavLink>
      </div>
      <Outlet/>
      {/* <NavLink to ="/mycart">
          <div>
          <IoCart src={cart} alt="cart" />
          <p className="font-extrabold absolute top-[-10px] right-[-5px]">{totalCartDisplay()}</p>

          </div>
          </NavLink> */}
      
      
    </div>
  );
};
// const Product = ({product}) => {
//   const [collections, setCollections] = useState({});
  
//   // const { product } = props;
//   const{addCart} = useContext(ContextProvider)
 
//   return (
//     <div className="md:px-24 px-6 my-16">
//       <div className="md:flex gap-36">
//         {product.photos &&
//           <div>
//           <img src={`https://api.timbu.cloud/images/${product?.photos[0].url}`}alt="j" className="w-[500px] h-fit" />
//           <div className="flex gap-4 my-8">
//             <img
//               className="lg:w-[100px] w-[73px] md:w-[65px] rounded h-fit"
//               src={`https://api.timbu.cloud/images/${product?.photos[0].url}`} alt={product?.name}
//             />
//             <img
//               className="lg:w-[100px] md:w-[65px]  w-[73px] rounded h-fit"
//               src={`https://api.timbu.cloud/images/${product?.photos[0].url}`}
//               alt="imgg"
//             />
//             <img
//               className="lg:w-[100px] md:w-[65px] w-[73px] rounded h-fit"
//               src={`https://api.timbu.cloud/images/${product?.photos[0].url}`}
//               alt="imgl"
//             />
//             <img
//               className="lg:w-[100px] md:w-[65px] w-[73px] rounded h-fit"
//               src={`https://api.timbu.cloud/images/${product?.photos[0].url}`}
//               alt="imgp"
//             />
//           </div>
//         </div>
//         }
//         <div>
//           <h1 className="font-extrabold md:text-xl">{product.name}</h1>
//           <div>
//             <div className="flex gap-8 py-2 md:justify-between lg:justify-between ">
//               <div className="flex md:w-6 ">
//                 <img src={rate} alt="rate" />
//                 <img src={rate} alt="rate" />
//                 <img src={rate} alt="rate" />
//                 <img src={rate} alt="rate" />
//                 <img src={ratee} alt="ratee" />
//               </div>
//               <p>157 review</p>
//             </div>
//             <p className="font-extrabold md:text-xl py-2">NGN{product.price}</p>
//             <p className="pt-2">Save 50% right now</p>
//             <h1 className="font-extrabold pt-4 md:text-xl pb-2">Features:</h1>
//             <ul>
//               <li className="list-disc py-2">Made with full cotton</li>
//               <li className="list-disc py-2">Slim fit for any body</li>
//               <li className="list-disc py-2">Quality control by JC</li>
//             </ul>
//             <div className="flex">
//               <div className="">
//                 <button onClick={() => addCart(product.id)} className=" bg-amber-950 text-white md:px-10 md:py-2 px-20 py-2 rounded my-12">
//                   <NavLink className="flex gap-8" to="/mycart">
//                   <span>Add to cart </span>
//                 <img
//                   src={cart}
//                   alt="hh"
//                   className="md:w-8 md:h-fit"
//                 />
//                 </NavLink>
//                 </button>
                
//               </div>
//               <img
//                 className="w-[30px] md:absolute md:top-[55px] bg-grays bg-gray-400 rounded md:right-[55px] h-fit px-1 py-1 right-[10px] md:block hidden top-[100px]"
//                 src={fav}
//                 alt="g"
//               />
//             </div>
//             <div>
//               <div className="flex items-center gap-2 py-2">
//                 <MdLocalShipping />
//                 <p>Free shipping nationwide</p>
//               </div>
//               <div className="flex items-center gap-2 py-2">
//                 <CiCreditCard1 />
//                 <p>100% Secured Payment</p>
//               </div>
//               <p className="py-2">Made by Professionals</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-14 pt-10">
//         <NavLink to="description">Description</NavLink>
//         <NavLink to="reviews">
//           Reviews{" "}
//           <span className="bg-grays bg-gray-400 px-2 py-1 rounded-full {({isActive}) => ({
//             className: isActive ? '<hr/>' : 'hr'})}">
//             (157)
//           </span>
//         </NavLink>
//         <NavLink to="support">Support</NavLink>
//       </div>
//       <Outlet/>
//       {/* <NavLink to ="/mycart">
//           <div>
//           <IoCart src={cart} alt="cart" />
//           <p className="font-extrabold absolute top-[-10px] right-[-5px]">{totalCartDisplay()}</p>

//           </div>
//           </NavLink> */}
      
      
//     </div>
//   );
// };

export default Product;
