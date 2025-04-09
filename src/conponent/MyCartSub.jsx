import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { ContextProvider } from "./Context";

const MyCartSub = () => {
  const { collections, cart, removeCart, addCart, clearCart } =
    useContext(ContextProvider);

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
                className="flex justify-between items-start gap-8 md:gap-32 flex-1 md:px-3 px-2 border border-gray-400 py-6"
              >
                <div className="flex gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="md:w-[240px] h-fit"
                  />
                  <div>
                    <p className="font-bold text-sm md:text-base">
                      {item.name}
                    </p>
                    <p className="text-sm">Size: {size}</p>
                    <p className="font-bold mt-2">NGN {item.price}</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="mb-2">
                    <MdDelete
                      onClick={() => clearCart(item.id)}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="bg-gray-400 rounded flex w-fit justify-center items-center px-4 py-1 my-8">
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
