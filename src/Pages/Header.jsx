import React from "react";
import logo from "../assets/Logos.png";
import { NavLink } from "react-router-dom";
import fav from "../assets/favourite.png";
import cart from "../assets/carts.png";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { IoCart } from "react-icons/io5";
import { useContext } from "react";
import { ContextProvider } from "../conponent/Context";

const Header = () => {
  
  const {totalCartDisplay} = useContext(ContextProvider)
  const [open, setOpen] = useState(false);
  const clickShow = () => {
    setOpen((open) => !open);
  };
  return (
    <header>
      <div className="bg-grays bg-gray-300 py-2 md:text-base text-xs">
        <h3 className="text-center">
          Summer Sale! Up to 50% off selected items. Limited time only
        </h3>
      </div>
      <div className="md:flex justify-between hidden items-center md:py-4  md:px-24 px-6">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <ul className="md:flex gap-4">
          <NavLink to="/help">Help</NavLink>
          <NavLink to="/join">Join Us</NavLink>
          <NavLink to="/sign">Sign In</NavLink>
        </ul>
      </div>
      <hr className="md:block hidden mx-24" />
      <div className="md:hidden px-6 py-4 flex justify-between">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="flex gap-4 items-center">
          <img className="" src={fav} alt="fav" />
          <NavLink to ="/mycart">
          <div>
          <IoCart src={cart} alt="cart" />
          <p className="font-extrabold absolute top-[40px] right-[50px]">{totalCartDisplay()}</p>

          </div>
          </NavLink>
          <div onClick={clickShow}>
            {open ? <FaTimes /> : <RxHamburgerMenu />}
          </div>
        </div>

      </div>
      
      <form action="" className="md:hidden block">
          <div className="">
            <input
              type="search"
              name="search"
              id=""
              placeholder="search"
              className="border-[1px] rounded relative w-full mx-auto h-8 "
            />
            <div className="absolute top-[95px] right-[15px]">
              <CiSearch size={20} />
            </div>
          </div>
        </form>
      <div
        className={`md:hidden text-center h-screen py-4 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="md:hidden grid text-center">
          <NavLink to="/help" className="py-5">
            Help
          </NavLink>
          <NavLink to="/sign" className="py-5">
            Sign In
          </NavLink>
          <NavLink to="/help" className="py-5">
            About
          </NavLink>
          <NavLink to="/join" className="py-5">
            Blog
          </NavLink>
          <NavLink to="/sign" className="py-5">
            Shipping & Returns
          </NavLink>
          <NavLink to="/sign" className="py-5">
            Contact Us
          </NavLink>
          <div className="gap-4 flex mx-auto text-center py-8">
            <button className="py-1 px-3 rounded bg-grays bg-gray-400">
              Join Us
            </button>
            <button className="py-1 px-3 rounded bg-grays bg-yellow-700">
              Sign In
            </button>
          </div>
        </ul>
      </div>
     
      <div className="flex lg:justify-between md:gap-[60px] py-4 md:px-24 px-6 items-center">
        <ul className="md:flex md:gap-6 hidden md:text-sm ">
          <NavLink className="hover:underline" to="/help">About</NavLink>
          <NavLink className="hover:underline" to="/join">Blog</NavLink>
          <NavLink className="hover:underline" to="/sign">Shipping & Returns</NavLink>
          <NavLink className="hover:underline" to="/sign">Contact Us</NavLink>
        </ul>
        <div className="flex flex-1  gap-2">
          <form action="">
            <div className="md:block hidden">
              <input
                type="search"
                name="search"
                id=""
                placeholder="search"
                className="border-[1px] rounded relative w-[300px] h-8 "
              />
              <div className="absolute top-[120px] right-[490px]">
                <CiSearch size={20} />
              </div>
            </div>
          </form>
          <img src={fav} alt="fav" className="md:block w-[30px] h-fit hidden" />
          <NavLink className="hover:bg-slate-600" to ="/mycart">
          <div className="relative">
            <IoCart  className="md:block w-[30px] h-fit hidden" src={cart} alt="cart" />
            <p className="font-extrabold absolute top-[-10px] right-[-5px]">{totalCartDisplay()}</p>
          </div>
          
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
