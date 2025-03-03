import { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../conponent/Context";
import Item from "../conponent/Item";

const AllCollections = () => {
  const { collections } = useContext(ContextProvider);
  const [allCollections, setAllCollections] = useState([]);
  useEffect(() => {
    setAllCollections(collections);
  }, [collections]);

  return (
    <div
      className="md:grid grid-cols-4 md:px-24 py-2 md:gap-5 flex flex-col justify-center items-center"
      data-aos="zoom-in"
      data-aos-delay="400"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      {allCollections &&
        allCollections.map((collection) => {
            console.log("Collection ID:", collection.id); 
           return  <Item
            key={collection.id}
            name={collection.name}
            price={collection.price}
            image={collection.image}
            id={collection.id}
          />
        } )}
    </div>
  );
};

export default AllCollections;
