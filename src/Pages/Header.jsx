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
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const { totalCartDisplay } = useContext(ContextProvider);
  const { showSearch, setShowSearch } = useContext(ContextProvider);
  const [open, setOpen] = useState(false);
  const clickShow = () => {
    setOpen((prev) => !prev);
  };
  const clickClose = () => {
    setOpen(false);
  };
  return (
    <header className={`relative font-inter py-4 font-sans text-base font-medium justify-between pt-4 ${
      open && "overflow-hidden h-screen"
    } `}>
      <div className="md:flex justify-between hidden items-center md:py-6  md:px-24 px-6">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <ul className="md:flex gap-4">
          <NavLink to="/help">About Us</NavLink>
          <NavLink to="/join">Contact Us</NavLink>
          <NavLink to="/sign">Sign In</NavLink>
        </ul>
        <div className="flex gap-4 items-center">
          <div onClick={() => setShowSearch(true)}>
            <CiSearch />
          </div>
          <NavLink
            to="/allcollections"
            className="py-2 px-3 rounded bg-grays bg-yellow-700 text-white"
          >
            Collections
          </NavLink>
          <NavLink to="/mycart">
            <div>
              <IoCart src={cart} alt="cart" />
              {cart.length > 0 && totalCartDisplay() !== 0 && (
                <p className="font-extrabold absolute top-[40px] right-[88px]">
                  {totalCartDisplay()}
                </p>
              )}
            </div>
          </NavLink>
        </div>
      </div>

      <div className="md:hidden px-6 py-4 flex justify-between">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="flex gap-4 items-center">
          <div onClick={() => setShowSearch(true)}>
            <CiSearch />
          </div>
          <NavLink to="/mycart">
            <div>
              <IoCart src={cart} alt="cart" />
              {cart.length > 0 && totalCartDisplay() !== 0 && (
                <p className="font-extrabold absolute top-[17px] right-[50px]">
                  {totalCartDisplay()}
                </p>
              )}
            </div>
          </NavLink>
          <div onClick={clickShow}>
            {open ? <FaTimes /> : <RxHamburgerMenu />}
          </div>
        </div>
      </div>
      <div onClick={clickClose}
        className={`md:hidden text-center h-screen py-4 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="md:hidden grid text-center">
          <NavLink to="/help" className="py-5">
            Contact Us
          </NavLink>
          <NavLink to="/sign" className="py-5">
            Sign In
          </NavLink>
          <NavLink to="/about" className="py-5">
            About Us
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
