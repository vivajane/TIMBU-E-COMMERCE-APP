import Item from "../conponent/Item";
import heroCollections from "../assets/Hero";

const HeroCollections = ({ filter }) => {
  const filteredCollections = heroCollections.filter((collection) =>
    filter === "All" ? collection : collection.category === filter
  );
  return (
    <div
      className='md:grid grid-cols-4 md:px-24 py-2 md:gap-5 flex flex-col justify-center items-center'
      data-aos='zoom-in'
      data-aos-delay='400'
      data-aos-easing='ease-in-sine'
      data-aos-duration='600'
    >
      {filteredCollections.map((collection) => (
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

export default HeroCollections;