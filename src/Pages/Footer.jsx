import React from "react";
import logo from "../assets/Logos.png";
import logos from "../assets/frame.png";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const footers = [
  {
    id: 1,
    name: "About",
    link: "/link",
  },
  {
    id: 2,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 3,
    name: "Careers",
    link: "/careers",
  },
  {
    id: 4,
    name: "We're hiring",
    link: "/hiring",
  },
  {
    id: 5,
    name: "Shipping & Returns",
    link: "/shipping",
  },
  {
    id: 6,
    name: "About",
    link: "/press",
  },
];

const Footer = () => {
  return (
    <div className="md:px-24 px-6 bg-grays bg-gray-200 mt-20 py-10">
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className="md:flex justify-between">
        <div className="md:flex items-center py-4 gap-8">
          {footers.map((footer) => (
            <li key={footer.id} className="list-none hover:font-bold py-3">
              <NavLink
                to={footer.link}
                className={(isActive) => (isActive ? "text-black" : null)}
              >
                {footer.name}
              </NavLink>
            </li>
          ))}
        </div>
        <div>
          <h1>Downlaod the App</h1>
          <div className="py-3">
            <img src={logos} alt="logos" />
          </div>
        </div>
      </div>

      <div>
        <hr className="border-gray-950 mt-16" />
      </div>
      <div className="md:flex items-center justify-between md:py-0 py-6">
        <ul className="flex gap-4 justify-center">
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><FaTwitterSquare/></li>
            <li><FaLinkedin/></li>
        </ul>
        <ul className="flex md:gap-8 md:justify-normal justify-center gap-8 py-6">
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
