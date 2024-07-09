import { useContext } from "react";
import { ContextProvider } from "./Context";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  const onClickHandler = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully")
    navigate("/");
  }
  const { totalCartAmount, collections, cart } = useContext(ContextProvider);
  return (
    <div className="md:px-10 px-2 border border-gray-400 py-6">
      {collections &&
        collections.map((e) => {
          if (cart[e.id] > 0) {
            return (
              <div key={e.id}>
                <h1 className="font-bold mb-4">Order Summary</h1>
                <div className="flex justify-between gap-8">
                  <h1>Subtotal</h1>
                  <h1>NGN{e.price * cart[e.id]}</h1>
                </div>
                <div className="flex justify-between gap-8">
                  <h1>Delivery Fee</h1>
                  <h1>0</h1>
                </div>
                <div className="flex justify-between gap-8">
                  <h1>Total</h1>
                  <h1>NGN{e.price * cart[e.id]}</h1>
                </div>
                <form action="" onSubmit={onClickHandler}>
                  
                  <button className="bg-black text-white px-8 rounded py-2 w-full my-3">
                    Confirm Order
                  </button>
                </form>
                <hr className="my-3" />
              </div>
            );
          }
        })}
    </div>
  );
};

export default OrderSummary;
