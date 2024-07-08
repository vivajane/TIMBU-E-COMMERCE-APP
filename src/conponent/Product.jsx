import { useContext } from "react";
import cart from "../assets/carts.png";
import rate from "../assets/rate.png"
import ratee from "../assets/ratee.png";
const Product = (props) => {
  const { product } = props;

  console.log(product, "product ooooooo");
  return (
    <div className="md:px-24 px-6 my-16">
      <div className="md:flex justify-between">
      <div>
        <img src={product.image} alt="j" className="w-[500px] h-fit" />
        <div className="flex gap-4 my-8">
          <img className="w-[100px] h-fit" src={product.image} alt="imgh" />
          <img className="w-[100px] h-fit" src={product.image} alt="imgg" />
          <img className="w-[100px] h-fit" src={product.image} alt="imgl" />
          <img className="w-[100px] h-fit" src={product.image} alt="imgp" />
        </div>
      </div>
      <div>
        <h1 className="font-extrabold">{product.name}</h1>
        <div >
          <div className="flex gap-1 md:ml-11 ml-24 pb-4">
          <img src={rate} alt="rate" />
          <img src={rate} alt="rate" />
          <img src={rate} alt="rate" />
          <img src={rate} alt="rate" />
          <img src={ratee} alt="ratee" />
          </div>
          <p >157 review</p>
          <p className="font-extrabold">NGN{product.price}</p>
          <p>Save 50% right now</p>
          <h1 className="font-extrabold">Features:</h1>
          <ul>
            <li>
              Made with full cotton
              <li>Slim fit for any body</li>
              <li>Quality control by JC</li>
            </li>
          </ul>
          <div className="relative">
            <button className=" bg-amber-950 text-white px-10 py-2 rounded my-3">Add to cart</button>
            <img src={cart} alt="hh" className="absolute top-5 right-[50px]" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Product;
