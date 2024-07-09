import React from "react";
import channel from "../assets/chanel.png";
import gucci from "../assets/gucci.png";
import hermes from "../assets/hermes.png";
import addidas from "../assets/adidas.png";
import prada from "../assets/prada.png";
import vans from "../assets/vans.png";
import versace from "../assets/versace.png";
import northface from "../assets/northface.png";

const Trust = () => {
  return (
    <div className="md:px-24 px-6 py-8">
      <h1 className="text-center font-extrabold md:text-base text-2xl">
        Trusted by over 100+ companies
      </h1>
      <div className="text-center ml-[55px]">
        <ul className="md:flex justify-around grid grid-cols-2 pt-4" data-aos="flip-left"
    data-aos-delay="400"
    data-aos-easing="ease-in-sine"
    data-aos-duration="600">
          <li>
            <img
              src={channel}
              alt="channel"
              className="h-16 w-auto object-contain"
            />
          </li>
          <li>
            <img
              src={addidas}
              alt="addida"
              className="h-16 w-auto object-contain"
            />
          </li>
          <li>
            <img
              src={hermes}
              alt="hermes"
              className="h-16 w-auto object-contain"
            />
          </li>
          <li>
            <img
              src={gucci}
              alt="gucci"
              className="h-16 w-auto object-contain"
            />
          </li>
        </ul>
        <ul className="md:flex justify-around grid grid-cols-2 pt-4" data-aos="flip-right"
    data-aos-delay="400"
    data-aos-easing="ease-in-sine"
    data-aos-duration="600">
          <li>
            <img src={vans} alt="vasn" className="h-16 w-auto object-contain" />
          </li>
          <li>
            <img
              src={prada}
              alt="prada"
              className="h-16 w-auto object-contain"
            />
          </li>
          <li>
            <img
              src={northface}
              alt="north"
              className="h-16 w-auto object-contain"
            />
          </li>
          <li>
            <img
              src={versace}
              alt="ver"
              className="h-16 w-auto object-contain"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Trust;
