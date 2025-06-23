import { useContext } from "react";
import { ContextProvider } from "./Context";
import { useNavigate } from "react-router-dom";
import Paystack from "@paystack/inline-js";

const MyCartSummary = () => {
  // inline
  const checkPaystack = () => {
    const popup = new Paystack();

    popup.newTransaction({
      key: "pk_test_ca40184e1f89bd86794ee8792a02dba72ed940a4",
      email: "obuekwekosi@gmail.com",
      amount: total * 100,
      onSuccess: (transaction) => {
        console.log(transaction);
        console.log("Payment successful!");
        setCart({});
        navigate("/cartform");
      },
      onLoad: (response) => {
        console.log("onLoad: ", response);
      },
      onCancel: () => {
        console.log("onCancel");
      },
      onError: (error) => {
        console.log("Error: ", error.message);
      },
    });
  };

  const navigate = useNavigate();
  const { collections, cart, setCart } = useContext(ContextProvider);

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

  if (subtotal === 0) return null;

  if (subtotal === 0) return null;
  console.log("Subtotal:", subtotal, "Total:", total);

  return (
    <div className="md:px-6 px-2 h-fit border text-sm space-y-2 border-gray-400 py-6">
      <h1 className="font-bold mb-4">Order Summary</h1>
      <div className="flex justify-between">
        <h1>Subtotal</h1>
        <h1>NGN {subtotal}</h1>
      </div>
      <div className="flex justify-between">
        <h1>Delivery Fee</h1>
        <h1>NGN {deliveryFee}</h1>
      </div>
      <div className="flex justify-between font-bold mt-2">
        <h1>Total</h1>
        <h1>NGN {total}</h1>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          console.log("Initializing payment...");
          checkPaystack();
        }}
        className="bg-black text-sm text-white px-8 rounded py-2 w-full my-3"
      >
        Go to Checkout
      </button>

      <hr className="my-3" />
    </div>
  );
};

export default MyCartSummary;
