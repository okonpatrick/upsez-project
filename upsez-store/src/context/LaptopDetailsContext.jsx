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