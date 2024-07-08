import { MdNavigateNext } from "react-icons/md";

const CartCheck = () => {
  return (
    <div>
        <div className="flex items-center gap-3">
      <h1>Home </h1>
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
