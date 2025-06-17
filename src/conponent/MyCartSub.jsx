import { MdDelete } from "react-icons/md";
import { useContext, useEffect } from "react";
import { ContextProvider } from "./Context";

const MyCartSub = () => {
  const { collections, cart, removeCart, addCart, clearCart } =
    useContext(ContextProvider);
    

    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


  return (
    <div>
      {collections.map((item) => {
        const cartItem = cart[item.id];

        // If no cart entry for this item, skip it
        if (!cartItem) return null;

        // Display for each size
        return Object.entries(cartItem).map(([size, quantity]) => {
          if (quantity > 0) {
            return (
              <div
                key={`${item.id}-${size}`}
                className="md:flex  md:justify-between text-sm md:text-xs md:items-start gap-8 md:gap-32 md:flex-1 md:px-3 px-2 border border-gray-400 py-6"
              >
                <div className="md:flex gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[240px] h-fit"
                  />
                  <div>
                    <p className="font-bold text-sm md:text-base">
                      {item.name}
                    </p>
                    <p className="text-sm">Size: {size}</p>
                    <p className="font-bold mt-2">NGN {item.price}</p>
                  </div>
                </div>

                <div className="md:flex flex-col md:items-center">
                  <div className="mb-2">
                    <MdDelete
                      onClick={() =>{ clearCart(item.id), cart === 0 && alert("Cart is empty")}}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="bg-gray-400 rounded flex w-fit justify-center items-center md:px-4 py-1 md:my-8">
                    <button
                      onClick={() => removeCart(item.id, size)}
                      className="px-2"
                    >
                      -
                    </button>
                    <span className="px-2">{quantity}</span>
                    <button
                      onClick={() => addCart(item.id, size)}
                      className="px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        });
      })}
    </div>
  );
};

export default MyCartSub;
