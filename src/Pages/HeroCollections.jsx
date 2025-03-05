import Item from "../conponent/Item";
import { useContext, useState, useEffect } from "react";

import { ContextProvider } from "../conponent/Context";
import collections from "../assets/collections";

const HeroCollections = () => {
  const{collections} = useContext(ContextProvider);

  const [hero, setHero] = useState([]);
  useEffect(() => {
    setHero(collections.slice(0, 4));
    // console.log(collections);
  }, [collections]);

  return (
    <div
      className="md:grid grid-cols-4 md:px-24 md:gap-5 flex flex-col justify-center items-center"
      data-aos="zoom-in"
      data-aos-delay="400"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      {hero.map((collection) => (
        <Item
          key={collection.id}
          name={collection.name}
          price={collection.price}
          image={collection.image}
          id={collection.id}
        />
      ))}
    </div>
  );
};
// const HeroCollections = ({ filter }) => {
//   const [product, setProduct] = useState([]);
//   const [page, setPage] = useState(1);
//   const [isError, setIsError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isEmpty, setIsEmpty] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       setIsError(false);

//       try {
//         const data = await getCollections(page);
//         console.log(data, "resultttt");
//         if (Array.isArray(data.items)) {
//           setProduct(data.items);
//           setIsEmpty(data.total === 0);
//         } else {
//           setProduct([]);
//         }
//       } catch (error) {
//         setIsError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [page]);

//   // const getCol = getCollections();
//   // console.log(getCol, "ggg")
//   const filteredCollections = product.filter((collection) =>
//     filter === "All" ? collection : collection.name.includes(filter)
//   );
//   if (isLoading)
//     return
//       // <Center>
//       //   <Loader />
//       // </Center>

//   if (isError) return <div>Error fetching products</div>;
//   if (isEmpty) return <div>No products found</div>;

//   return (
//     <div
//       className="md:grid grid-cols-4 md:px-24 py-2 md:gap-5 flex flex-col justify-center items-center"
//       data-aos="zoom-in"
//       data-aos-delay="400"
//       data-aos-easing="ease-in-sine"
//       data-aos-duration="600"
//     >
//       {isError && <p>{isError}</p>}
//       {filteredCollections.map((collection) => (
//         <Item
//           key={collection.id}
//           name={collection.name}
//           price={collection.price}
//           photos={collection.photos[0].url}
//           id={collection.id}
//         />
//       ))}
//       <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
//     </div>
//   );
// };

export default HeroCollections;
