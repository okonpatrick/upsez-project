//LaptopDetailsContext.js
import { createContext, useContext, useState } from 'react';

const ComputerAccessoriesDetailsContext = createContext();

export const ComputerAccessoriesDetailsProvider = ({ children }) => {
  const [selectedComputerAccessories, setSelectedComputerAccessories] = useState("");

  return (
    <ComputerAccessoriesDetailsContext.Provider value={{ selectedComputerAccessories, setSelectedComputerAccessories }}>
      {children}
    </ComputerAccessoriesDetailsContext.Provider>
  );
};

export const useComputerAccessoriesDetails = () => useContext(ComputerAccessoriesDetailsContext);