import { useContext } from "react";
import { ContextProvider } from "./Context";
import { useNavigate } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";

const MyCartSummary = () => {
  const navigate = useNavigate();
  const { collections, cart, setCart } = useContext(ContextProvider);

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

   const config = {
    reference: new Date().getTime().toString(),
    email: "obuekwekosi@gmail.com", 
    amount: total * 100, 
    publicKey: "pk_test_ca40184e1f89bd86794ee8792a02dba72ed940a4", 
  };

   const onSuccess = (reference) => {
    console.log("Payment successful!", reference);
    alert("Payment success!");

    setCart({});
    // navigate("/cartform");
  };

   const onClose = () => {
      console.log("Payment closed by user");
    };
  
    const initializePayment = usePaystackPayment(config);
     if (subtotal === 0) return null;

  

  // If subtotal is 0, don't render anything
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

      
       
        <button type="button" onClick={(e) =>{e.preventDefault(); console.log("Initializing payment..."); initializePayment(onSuccess, onClose)} }className="bg-black text-sm text-white px-8 rounded py-2 w-full my-3">
          Go to Checkout
        </button>
      
      <hr className="my-3" />
    </div>
  );
};

export default MyCartSummary;
