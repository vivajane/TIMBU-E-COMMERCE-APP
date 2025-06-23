import { IoMdContact } from "react-icons/io";
import { MdOutlineLocalShipping } from "react-icons/md";
import { useState } from "react";
import ConfirmAdress from "./ConfirmAdress";
import { toast } from "react-toastify";

const CartForm = ({ addForm, setAddForm }) => {
  const [showModal, setShowModal] = useState(false);

  const closeShowModal = () => {
    setShowModal(false);
  };

  const [form, setForm] = useState({
    id: "",
    phone: "",
    email: "",
    fname: "",
    lname: "",
    city: "",
    state: "",
    country: "",
    street: "",
  });

  const onChangeHandler = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    console.log(form);
  };

  const onSubmitHandler = (e) => {
    
    e.preventDefault();
    if(
      form.phone === "" ||
      form.email === "" ||
      form.fname === "" ||
      form.lname === "" ||
      form.city === "" ||
      form.state === "" ||
      form.country === "" ||
      form.street === ""
    ){
      toast.error("All fields are required");
      return;
    }
    const updatedForm = {
      id: Math.floor(Math.random() * 100000),
      phone: form.phone,
      email: form.email,
      fname: form.fname,
      lname: form.lname,
      city: form.city,
      state: form.state,
      country: form.country,
      street: form.street,
    };
    setAddForm(() => {
      const formUp = [updatedForm];
      localStorage.setItem("form", JSON.stringify(formUp));
      return formUp;
    });

    setForm({
      id: "",
      phone: "",
      email: "",
      fname: "",
      lname: "",
      city: "",
      state: "",
      country: "",
      street: "",
    });
    setShowModal(true);
  };

  return (
    <div>
      <form
        onSubmit={onSubmitHandler}
        className="pt-24 md:px-24 px-6"
        action=""
      >
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
                  onChange={onChangeHandler}
                  className="border-[1px] rounded py-2 md:px-4 w-full"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  id="phone"
                />
              </label>
            </div>
            <div>
              <label htmlFor="email">
                Email Address
                <input
                  onChange={onChangeHandler}
                  className="border-[1px] rounded py-2 px-4 w-full"
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
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
                  onChange={onChangeHandler}
                  className="border-[1px] rounded py-2 px-4 w-full"
                  type="text"
                  name="fname"
                  id="fname"
                  value={form.fname}
                />
              </label>
            </div>
            <div>
              <label htmlFor="lname">
                Last Name
                <input
                  onChange={onChangeHandler}
                  className="border-[1px] rounded py-2 px-4 w-full"
                  type="text"
                  name="lname"
                  id="lname"
                  value={form.lname}
                />
              </label>
            </div>
          </div>
          <div className="md:flex pb-6 px-2 gap-4">
            <label htmlFor="add one">
              Street
              <input
                onChange={onChangeHandler}
                className="border-[1px] rounded py-2 px-14 w-full"
                type="text"
                name="street"
                id="street"
                value={form.street}
              />
            </label>
          </div>

          <div className="md:flex pb-6 px-2 gap-6">
            <div>
              <label htmlFor="city">
                City
                <input
                  onChange={onChangeHandler}
                  className="border-[1px] rounded py-2 px-4 w-full"
                  type="text"
                  name="city"
                  id="city"
                  value={form.city}
                />
              </label>
            </div>
            <div>
              <label htmlFor="country">
                Country
                <input
                  onChange={onChangeHandler}
                  className="border-[1px] rounded py-2 px-4 w-full"
                  type="text"
                  name="country"
                  id="country"
                  value={form.country}
                />
              </label>
            </div>
          </div>
          <div className="md:flex pb-6 px-2 gap-6">
            <div>
              <label htmlFor="state">
                State/Province
                <input
                  onChange={onChangeHandler}
                  className="border-[1px] rounded py-2 px-4 w-full"
                  type="text"
                  name="state"
                  id="state"
                  value={form.state}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="bg-black text-white inline-flex px-6 py-2 rounded-lg hover:bg-gray-800 transition">
          <button className="text-center flex flex-col justify-center items-center">
            Submit
          </button>
        </div>
      </form>
      {showModal && (
        <ConfirmAdress
          addForm={addForm}
          setAddForm={setAddForm}
          setShowModal={closeShowModal}
        />
      )}
    </div>
  );
};

export default CartForm;
