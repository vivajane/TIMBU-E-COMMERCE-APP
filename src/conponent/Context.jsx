
import { createContext } from "react";
import collections from "../assets/collections";

export const ContextProvider = createContext(null);


const Context = (props) => {
    
    console.log(collections)
    const contextValue = {
        collections
        
    }
  return (
    <ContextProvider.Provider value={contextValue}>
        {props.children}

    </ContextProvider.Provider>
  )
}

export default Context
// import { createContext } from 'react';
// import collections from "../assets/collections";

// export const Context = createContext(null);

// const ContextProvider = ({ children }) => {
//   const contextValue = { collections };

//   return (
//     <Context.Provider value={contextValue}>
//       {children}
//     </Context.Provider>
//   );
// }

// export default ContextProvider;


 

