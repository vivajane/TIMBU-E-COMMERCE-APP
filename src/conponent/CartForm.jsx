import { IoMdContact } from "react-icons/io";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { useState } from "react";


const CartForm = () => {
  const [form, setForm] = useState({
    phone: "",
    email: "",
    cvv: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    addone: "",
    addtwo: "",
    line: "",
    suite: "",
    code: "",

  })
  const onChangeHandler = (e) => {
    const{name,value}= e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name] : value
      }
    })
   

  }
  return (
    <form className="pt-24 md:px-24 px-6" action="" onSubmit={onChangeHandler}>
      <div className="border-[1px] rounded  md:w-[500px] my-4">
        <div className="flex gap-4 pl-2">
          <IoMdContact className="mt-3" size={20} />
          <h1 className="pt-3">CONTACT INFO FOR SHIPPING</h1>
        </div>
        <hr className="my-2" />
        <div className="md:flex pb-6 px-2 md:gap-4">
          <div>
            <label htmlFor="phone">
              Phone Number
              <input
                className="border-[1px] rounded py-2 md:px-4 w-full"
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
                className="border-[1px] rounded py-2 px-4 w-full"
                type="email"
                name="email"
                id="email"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="border-[1px] rounded md:w-[500px] my-4">
        <div className="flex gap-4 pl-2">
          <MdOutlineLocalShipping className="mt-3" size={20} />
          <h1 className="pt-3">SHIPPING ADDRESS</h1>
        </div>
        <hr className="my-2" />
        <div className="md:flex pb-6 px-2 gap-6">
          <div>
            <label htmlFor="fname">
              First Name
              <input
                className="border-[1px] rounded py-2 px-4 w-full"
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
                className="border-[1px] rounded py-2 px-4 w-full"
                type="text"
                name="lname"
                id="lname"
              />
            </label>
          </div>
        </div>
        <div className="md:flex pb-6 px-2 gap-4">
          <label htmlFor="add one">
            Address line 1
            <input
              className="border-[1px] rounded py-2 px-14 w-full"
              type="text"
              name="addone"
              id="addone"
            />
          </label>

        </div>
      
        <div className="md:flex pb-6 px-2 gap-6">
          <div>
            <label htmlFor="city">
              City
              <input
                className="border-[1px] rounded py-2 px-4 w-full"
                type="text"
                name="city"
                id="city"
              />
            </label>
          </div>
          <div>
            <label htmlFor="country">
              Country
              <input
                className="border-[1px] rounded py-2 px-4 w-full"
                type="text"
                name="country"
                id="country"
              />
            </label>
          </div>
        </div>
        <div className="md:flex pb-6 px-2 gap-6">
          <div>
            <label htmlFor="state">
              State/Province
              <input
                className="border-[1px] rounded py-2 px-4 w-full"
                type="text"
                name="state"
                id="state"
              />
            </label>
          </div>

        </div>
      </div>
      <div className="border-[1px] rounded md:w-[500px] my-4">
        <div className="flex gap-4 pl-2">
          <FaRegCreditCard className="mt-3" size={20} />
          <h1 className="pt-3">PAYMENT</h1>
        </div>
        <hr className="my-2" />
        <div className="block pb-6 px-2">
          <div>
            <label htmlFor="card">
              Card Number
              <input
                className="border-[1px] rounded py-2 px-4 w-full"
                type="tel"
                name="card"
                id="card"
              />
            </label>
          </div>
          <div>
            <label htmlFor="holder">
              Holders Name
              <input
                className="border-[1px] rounded py-2 px-4 w-full"
                type="email"
                name="holder"
                id="holder"
              />
            </label>
          </div>
        </div>
        <div className="md:flex pb-6 px-2 gap-4">
          <label htmlFor="expiration">
          Expiration date (MM/YY)
            <input
              className="border-[1px] rounded my-3 py-2 px-14 w-full"
              type="date"
              name="expiration"
              id="expiration"
            />
          </label>
          <label htmlFor="cvv">
            CVV
            <input
              className="border-[1px] rounded my-3 py-2 px-1 w-full"
              type="tel"
              name="cvv"
              id="cvv"
            />
          </label>
        </div>

      </div>
    </form>
  );
};

export default CartForm;
