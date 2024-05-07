//LaptopDetailsContext.js
import { createContext, useContext, useState } from 'react';

const LaptopDetailsContext = createContext();

export const LaptopDetailsProvider = ({ children }) => {
  const [selectedLaptop, setSelectedLaptop] = useState("");

  return (
    <LaptopDetailsContext.Provider value={{ selectedLaptop, setSelectedLaptop }}>
      {children}
    </LaptopDetailsContext.Provider>
  );
};

export const useLaptopDetails = () => useContext(LaptopDetailsContext);

// import { createContext, useContext, useState } from 'react';

// const LaptopDetailsContext = createContext();

// export const LaptopDetailsProvider = ({ children }) => {
//   const [selectedLaptop, setSelectedLaptop] = useState(null); // Initialize selectedLaptop state to null

//   return (
//     <LaptopDetailsContext.Provider value={{ selectedLaptop, setSelectedLaptop }}>
//       {children}
//     </LaptopDetailsContext.Provider>
//   );
// };

// export const useLaptopDetails = () => {
//   const context = useContext(LaptopDetailsContext);
//   if (!context) {
//     throw new Error('useLaptopDetails must be used within a LaptopDetailsProvider');
//   }
//   return context;
// };

// export default LaptopDetailsContext;
