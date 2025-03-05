import React from "react";
import Hero from "./Hero";
import Trust from "./Trust";
import Collection from "./Collection";
import HeroCollections from "./HeroCollections";
import BestSeller from "../conponent/BestSeller";
// import { useState } from "react";

const Home = () => {
  // const [filter, setFilter] = useState("All");
  return (
    <div>
      <Hero />
      <Trust />
      <BestSeller/>
      <Collection />
      <HeroCollections />
    </div>
  );
};

export default Home;