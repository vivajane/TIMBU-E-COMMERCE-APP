import { useContext } from "react";
import { ContextProvider } from "./Context";

const MyCartSummary = () => {
  const { totalCartAmount, collections, cart } = useContext(ContextProvider);
  return (
    <div className="md:px-10 px-2 border border-gray-400 py-6">
      {collections &&
        collections.map((e) => {
          if (cart[e.id] > 0) {
            return (
              <div key={e.id}>
                <h1 className="font-bold mb-4">Order Summary</h1>
                <div className="flex justify-between">
                  <h1>Subtotal</h1>
                  <h1>NGN{e.price * cart[e.id]}</h1>
                </div>
                <div className="flex justify-between">
                  <h1>Delivery Fee</h1>
                  <h1>0</h1>
                </div>
                <div className="flex justify-between">
                  <h1>Total</h1>
                  <h1>NGN{e.price * cart[e.id]}</h1>
                </div>
                <form action="">
                  <div className="flex gap-4">
                    <input
                      className=" border-gray-400 border-[1px] my-3 py-2 rounded"
                      type="tel"
                      name=""
                      id=""
                      placeholder="Apply promo code  "
                    />
                    <div className="my-3">
                      <button className="bg-black text-white px-8 rounded py-2">
                        Apply
                      </button>
                    </div>
                  </div>
                  <button className="bg-black text-white px-8 rounded py-2 w-full my-3">
                    Go to Checkout
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

export default MyCartSummary;
