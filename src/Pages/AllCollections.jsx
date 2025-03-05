import { useCallback, useContext, useEffect, useState } from "react";
import { ContextProvider } from "../conponent/Context";

import Item from "../conponent/Item";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const AllCollections = () => {
  const { collections } = useContext(ContextProvider);
  const [allCollections, setAllCollections] = useState([]);
  const [show, setShow] = useState(false);
  const [showFilter, setShowFilter] = useState([]);
  const [types, setTypes] = useState([]);

  const checkFilter = (e) => {
    if (showFilter.includes(e.target.value)) {
      setShowFilter((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setShowFilter((prev) => [...prev, e.target.value]);
    }
  };

  const checkTypes = (e) => {
    if (types.includes(e.target.value)) {
      setTypes((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setTypes((types) => [...types, e.target.value]);
    }
  };

  const FilterUse = useCallback(() => {
    let filterSec = [...collections];
    if (showFilter.length > 0) {
      filterSec = filterSec.filter((item) =>
        showFilter.includes(item.subcategory)
      );
    }

    if(types.length > 0){
      filterSec= filterSec.filter((item) => types.includes(item.category))
    }
    setAllCollections(filterSec); // Update allCollections instead of showFilter
  }, [collections, showFilter, types]); // Recomputes only when `collections` or `showFilter` changes

  const showClick = () => {
    setShow((show) => !show);
  };

  useEffect(() => {
    FilterUse();
  }, [FilterUse]);

  useEffect(() => {
    setAllCollections(collections);
  }, [collections]);
  return (
    <div className="flex gap-8 lg:px-16 md:px-12 relative sm:px-9 px-6 ">
      <div className="space-y-6 sticky h-screen top-0 ">
        <div className="hidden sm:block gap-2 items-center">
          <h1 className="font-extrabold pt-2 flex sm:block text-xs sm:sm lg:text-2xl">
            FILTERS
          </h1>
          <div className="sm:hidden block">
            <FaAngleDown size={20} />
          </div>
        </div>
        <div className="flex sm:hidden gap-2 items-center">
          <h1 className="font-extrabold flex sm:block text-xs sm:sm lg:text-2xl">
            FILTERS
          </h1>
          <div onClick={showClick} className="sm:hidden block">
            {show ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
          </div>
        </div>
        <div className="border-[1px] px-3 hidden sm:block sm:text-xs md:text-sm lg:text-base border-gray-400">
          <h1 className="font-bold py-2">CATEGORIES</h1>
          <div className="space-y-1">
            <div className="flex gap-2">
              <input type="checkbox" onChange={checkFilter} value={"men"} />
              <p>Men</p>
            </div>
            <div className="flex gap-2">
              <input onChange={checkFilter} type="checkbox" value={"women"} />
              <p>Women</p>
            </div>
            <div className="flex gap-2">
              <input onChange={checkFilter} type="checkbox" value={"kids"} />
              <p>Kids</p>
            </div>
          </div>
        </div>
        <div className="border-[1px] px-3 my-3 hidden sm:block border-gray-400">
          <h1 className="font-bold py-2">TYPES</h1>
          <div className="space-y-1">
            <div className="flex gap-2">
              <input type="checkbox" onChange={checkTypes} value={"tshirts"} />
              <p>T-Shirts</p>
            </div>
            <div className="flex gap-2">
              <input onChange={checkTypes} value={"hoodies"} type="checkbox" />
              <p>Hoodies</p>
            </div>
            <div className="flex gap-2">
              <input
                onChange={checkTypes}
                value={"sweatshirts"}
                type="checkbox"
              />
              <p>SweatShirts</p>
            </div>
          </div>
        </div>
        {/* small screens */}
        {show && (
          <div className="text-[8px]">
            <div className="border-[1px] px-3 py-2 sm:text-xs  border-gray-400">
              <h1 className="font-bold py-2">CATEGORIES</h1>
              <div className="space-y-1">
                <div className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <p>Men</p>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <p>Women</p>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <p>Kids</p>
                </div>
              </div>
            </div>
            <div className="border-[1px] px-3 my-3 py-2 border-gray-400">
              <h1 className="font-bold py-2">TYPES</h1>
              <div className="space-y-1">
                <div className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <p>T-Shirts</p>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <p>Hoodies</p>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <p>SweatShirts</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="flex text-sm sm:text-sm  justify-between items-center">
          <div className=" pt-2 md:gap-14 flex gap-4 font-extrabold justify-center items-center">
            <h1 className="md:text-2xl hidden sm:block text-xl">
              <span className="text-amber-950 px-2">Our</span>
              <span className="text-grays-900">Collections</span>
            </h1>
          </div>
          <div className="  text-xs sm:text-sm md:text-base px-2">
            <select
              className="border-[1px] border-black"
              name="relevant"
              id="relevant"
            >
              <option value="rel">Relevant</option>
              <option value="low">Low - High</option>
              <option value="high">High - Low</option>
            </select>
          </div>
        </div>
        <div className=" pt-8 block sm:hidden font-extrabold justify-center items-center">
          <h1 className="md:text-2xl sm:hidden block text-xl">
            <span className="text-amber-950 px-2">Our</span>
            <span className="text-grays-900">Collections</span>
          </h1>
        </div>
        <div
          className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-3  py-2 "
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          {allCollections &&
            allCollections.map((collection) => {
              console.log("Collection ID:", collection.id);
              return (
                <Item
                  key={collection.id}
                  name={collection.name}
                  price={collection.price}
                  image={collection.image}
                  id={collection.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AllCollections;
