//LaptopDetailsContext.js
import { createContext, useContext, useState } from 'react';

const EyeCareAndJewelryDetailsContext = createContext();

export const EyeCareAndJewelryDetailsProvider = ({ children }) => {
  const [selectedEyeCareAndJewelry, setSelectedEyeCareAndJewelry] = useState("");

  return (
    <EyeCareAndJewelryDetailsContext.Provider value={{ selectedEyeCareAndJewelry, setSelectedEyeCareAndJewelry }}>
      {children}
    </EyeCareAndJewelryDetailsContext.Provider>
  );
};

export const useEyeCareAndJewelryDetails = () => useContext(EyeCareAndJewelryDetailsContext);