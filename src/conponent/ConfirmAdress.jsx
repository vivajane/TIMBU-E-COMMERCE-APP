import { useEffect, useState } from "react";
import Shipped from "./Shipped";

const ConfirmAdress = ({ addForm, setShowModal }) => {
  const [showShipping, setShowShipping] = useState(false);

  const closeShipping = () => {
    setShowShipping(false);
  };
  useEffect(() => {
    console.log(addForm);
     console.log(showShipping);
  }, [addForm, showShipping]);
  return (
    <div className="bg-[rgba(0,0,0,0.9)] fixed flex flex-col justify-center items-center top-0 bottom-0 left-0  right-0">
      <div className="bg-white sm:p-6 p-6 rounded-md shadow-md ">
        <h1 className="text-lg font-bold mb-4">Confirm Shipping details</h1>
        {addForm &&
          addForm.map((item) => {
            return (
              <div className="space-y-2 " key={item.id}>
                <h1>
                  <span>Name: </span>
                  {item.fname} {item.lname}
                </h1>
                <h1>
                  <span>Email: </span>
                  {item.email}
                </h1>
                <h1>
                  <span>Phone: </span>
                  {item.phone}
                </h1>
                <h1>
                  <span>Street: </span>
                  {item.street}
                </h1>
                <h1>
                  <span>City: </span>
                  {item.city}
                </h1>
                <h1>
                  <span>State: </span>
                  {item.state}
                </h1>
                <h1>
                  <span>Country: </span>
                  {item.country}
                </h1>
              </div>
            );
          })}
        <div>
          <button
            onClick={() => {
              setShowShipping(true);
              
            
             
            }}
            className="bg-[#0000FF] py-2 px-9 text-white mt-4 rounded-md  hover:bg-[#00A2B0]"
          >
            Confirm
          </button>
        </div>
      </div>
      {showShipping && (
        <Shipped
          showShipping={showShipping}
          setShowModal={setShowModal}
          setShowShipping={closeShipping}
        />
      )}
    </div>
  );
};

export default ConfirmAdress;
