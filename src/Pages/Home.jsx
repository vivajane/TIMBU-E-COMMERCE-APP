import React from "react";
import Hero from "./Hero";
import Trust from "./Trust";
import Collection from "./Collection";
import HeroCollections from "./HeroCollections";
import { useState } from "react";

const Home = () => {
  const [filter, setFilter] = useState("All");
  return (
    <div>
      <Hero />
      <Trust />
      <Collection setFilter={setFilter} />
      <HeroCollections filter={filter} />
    </div>
  );
};

export default Home;