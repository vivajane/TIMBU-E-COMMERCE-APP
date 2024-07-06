import React from "react";

const Hero = () => {
  return (
    <div className="bg-shirt md:bg-cover md:h-screen bg-cover bg-no-repeat">
      <div className="md:pt-9">
        <h1 className="text-white md:font-[500px] md:text-5xl text:3xl text-center md:pt-60 pt-24">
          Unleash Your Inner Style Icon
        </h1>
        <p className="text-white font-[10px] md:text-xl text-[10px] pt-2 text-center md:pt-7">
          Discover the latest trends in men’s fashion, <br /> tailored for every
          occasion.
        </p>
        <div className="text-center mx-auto my-8 pb-3">
        <button className="py-3 px-3 rounded bg-grays bg-yellow-700 text-white ">
          View our Collections
        </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
