//LaptopDetailsContext.js
import { createContext, useContext, useState } from 'react';

const PhonesAndTabletsContext = createContext();

export const PhonesAndTabletsProvider = ({ children }) => {
  const [selectedPhonesAndTablets, setSelectedPhonesAndTablets] = useState("");

  return (
    <PhonesAndTabletsContext.Provider value={{ selectedPhonesAndTablets, setSelectedPhonesAndTablets }}>
      {children}
    </PhonesAndTabletsContext.Provider>
  );
};

export const usePhonesAndTabletsDetails = () => useContext(PhonesAndTabletsContext);