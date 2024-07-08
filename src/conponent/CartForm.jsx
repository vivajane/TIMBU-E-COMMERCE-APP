import { IoMdContact } from "react-icons/io";
import { MdOutlineLocalShipping } from "react-icons/md";

const CartForm = () => {
  return (
    <form action="">
      <div className="border-[1px] rounded w-[500px] my-4">
        <div className="flex gap-4 pl-2">
          <IoMdContact className="mt-3" size={20} />
          <h1 className="pt-3">CONTACT INFO</h1>
        </div>
        <hr className="my-2" />
        <div className="flex pb-6 px-2">
          <div>
            <label htmlFor="phone">
              Your Phone Number
              <input
                className="border-[1px] rounded py-2 px-4"
                type="tel"
                name="phone"
                id="phone"
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email Adress
              <input
                className="border-[1px] rounded py-2 px-4"
                type="email"
                name="email"
                id="email"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="border-[1px] rounded w-[500px] my-4">
        <div className="flex gap-4 pl-2">
          <MdOutlineLocalShipping className="mt-3" size={20} />
          <h1 className="pt-3">SHIPPING ADDRESS</h1>
        </div>
        <hr className="my-2" />
        <div className="flex pb-6 px-2">
          <div>
            <label htmlFor="fname">
              First Name
              <input
                className="border-[1px] rounded py-2 px-4"
                type="text"
                name="fname"
                id="fname"
              />
            </label>
          </div>
          <div>
            <label htmlFor="lname">
              Last Name
              <input
                className="border-[1px] rounded py-2 px-4"
                type="text"
                name="lname"
                id="lname"
              />
            </label>
            <label htmlFor="add one">
            Address line 1
              <input
                className="border-[1px] rounded py-2 px-8"
                type="text"
                name="addone"
                id="addone"
              />
            </label>
            <label htmlFor="suite">
            Apt, Suite
              <input
                className="border-[1px] rounded py-2 px-4"
                type="text"
                name="suite"
                id="suite"
              />
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CartForm;
