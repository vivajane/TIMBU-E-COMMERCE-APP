import { useContext } from "react";
import { ContextProvider } from "./Context";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  const { collections, cart } = useContext(ContextProvider);

  // Calculate subtotal
  let subtotal = 0;

  collections.forEach((item) => {
    const cartItem = cart[item.id];
    if (cartItem) {
      Object.entries(cartItem).forEach(([size, quantity]) => {
        subtotal += item.price * quantity;
      });
    }
  });

  const deliveryFee = 0;
  const total = subtotal + deliveryFee;

  const onClickHandler = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully");
    navigate("/");
    // Clear cart logic should go here if needed
  };

  // Don’t show summary if cart is empty
  if (subtotal === 0) return null;

  return (
    <div className="md:px-10 px-2 border border-gray-400 py-6">
      <h1 className="font-bold mb-4">Order Summary</h1>
      <div className="flex justify-between gap-8">
        <h1>Subtotal</h1>
        <h1>NGN {subtotal}</h1>
      </div>
      <div className="flex justify-between gap-8">
        <h1>Delivery Fee</h1>
        <h1>NGN {deliveryFee}</h1>
      </div>
      <div className="flex justify-between gap-8 font-bold mt-2">
        <h1>Total</h1>
        <h1>NGN {total}</h1>
      </div>
      <form onSubmit={onClickHandler}>
        <button className="bg-black text-white px-8 rounded py-2 w-full my-3">
          Confirm Order
        </button>
      </form>
      <hr className="my-3" />
    </div>
  );
};

export default OrderSummary;
