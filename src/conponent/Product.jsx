
import { useContext } from "react";
import cart from "../assets/carts.png";
import rate from "../assets/rate.png";
import ratee from "../assets/ratee.png";
import { CiCreditCard1 } from "react-icons/ci";
import { MdLocalShipping } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { ContextProvider } from "./Context";
import Related from "./Related";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductHead from "./ProductHead";

const Product = (props) => {
  const navigate = useNavigate();
  // const [collections, setCollections] = useState({});
  const [size, setSize] = useState("");

  const clickSize = (e) => {
    setSize(e.target.textContent);

    console.log(e.target.textContent, "from size");
  };

  const addToCart = async() => {
    const res = await addCart(product.id, size);
    if(res){
      navigate("/cart")
    }
    
  }

  const { product } = props;
  const { addCart } = useContext(ContextProvider);
  console.log(product, "from products ooo");

  return (
    <div className="md:px-24 px-6 py-6 border-t">
      <div className="text-gray-800 pb-2">
        <ProductHead product= {product}/>
      </div>
      <div className="md:flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {product.image && (
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              <img
                className="sm:w-full w-[24%] flex-shrink-0 sm:mb-3"
                src={product.image}
                alt={product.name}
              />
              <img
                className="sm:w-full w-[24%] flex-shrink-0 sm:mb-3"
                src={product.image}
                alt="imgg"
              />
              <img
                className="sm:w-full w-[24%] flex-shrink-0 sm:mb-3"
                src={product.image}
                alt="imgl"
              />
              <img
                className="sm:w-full w-[24%] flex-shrink-0 sm:mb-3"
                src={product.image}
                alt="imgp"
              />
            </div>
            <div className="w-full sm:w-[80%]">
              <img src={product.image} alt="j" className="w-full h-auto" />
            </div>
          </div>
        )}
        <div className="flex-1 text-sm md:text-sm">
          <h1 className="font-extrabold pt-2 md:pt-0 md:text-xl">{product.name}</h1>
          <div>
            <div className="flex gap-8 py-1 md:justify-between lg:justify-between ">
              <div className="flex items-center gap-1 mt-2">
                <img className="w-3 h-3" src={rate} alt="rate" />
                <img className="w-3 h-3" src={rate} alt="rate" />
                <img className="w-3 h-3" src={rate} alt="rate" />
                <img className="w-3 h-3" src={rate} alt="rate" />
                <img className="w-3 h-3" src={ratee} alt="ratee" />
                <p className="pl-2 text-sm">157 review</p>
              </div>
            </div>
            <p className="font-extrabold md:text-sm text-sm py-1">
              ₦{product.price}
            </p>
            <p className="pt-2">Save 50% right now</p>
            <h1 className="font-extrabold pt-4 md:text-xl pb-2">Features:</h1>
            <ul className="space-y-2">
              <li className="list-disc ">Made with full cotton</li>
              <li className="list-disc">Slim fit for any body</li>
              <li className="list-disc">Quality control by JC</li>
            </ul>
            <div>
              <h1 className="font-extrabold pt-4 md:text-xl pb-2">Select Size</h1>
              <div onClick={clickSize} className="flex gap-2 py-2">
                <button className="bg-grays bg-gray-400 px-2 py-1 rounded">
                  S
                </button>
                <button className="bg-grays bg-gray-400 px-2 py-1 rounded">
                  M
                </button>
                <button className="bg-grays bg-gray-400 px-2 py-1 rounded">
                  L
                </button>
                <button className="bg-grays bg-gray-400 px-2 py-1 rounded">
                  XL
                </button>
                
              </div>
            </div>
            <div className="flex text-sm md:text-sm">
              <div className="py-3 text-sm md:text-sm">
                <button
                  onClick={addToCart}
                  className=" bg-amber-950 text-white md:px-10 md:py-2 px-6  py-2 rounded "
                >Add To Cart
                </button>
              </div>
             
            </div>
            <div className="space-y-2 text-sm md:text-sm">
              <div className="flex items-center gap-2">
                <MdLocalShipping />
                <p>Free shipping nationwide</p>
              </div>
              <div className="flex items-center gap-2">
                <CiCreditCard1 />
                <p>100% Secured Payment</p>
              </div>
              <p className="">Made by Professionals</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Related showFilter={product.showFilter} types={product.types} />
      </div>
      <div className="flex md:gap-3 space-x-2 pt-10">
        <NavLink className="border py-2 text-xs sm:text-sm sm:px-5 px-2" to="description">
          Description
        </NavLink>
        <NavLink className="border py-2 text-xs sm:text-sm sm:px-5 px-2" to="reviews">
          Reviews <span>(157)</span>
        </NavLink>
        <NavLink className="border py-2 text-xs sm:text-sm px-2 sm:px-5" to="support">
          Support
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;



