import { MdNavigateNext } from "react-icons/md";
import { NavLink } from "react-router-dom";

const CartCheck = () => {
  return (
    <div>
      <div className="flex items-center gap-3">
       <NavLink to ="/" >Home</NavLink>
        <div>
          <MdNavigateNext />
        </div>
        <h1>Cart</h1>
        <div>
          <MdNavigateNext />
        </div>
        <h1>Checkout</h1>
      </div>
      <h1 className="font-extrabold text-2xl pt-8">Checkout</h1>
    </div>
  );
};

export default CartCheck;
