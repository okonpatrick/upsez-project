//LaptopDetailsContext.js
import { createContext, useContext, useState } from 'react';

const PhoneAccessoriesDetailsContext = createContext();

export const PhoneAccessoriesDetailsProvider = ({ children }) => {
  const [selectedPhoneAccessories, setSelectedPhoneAccessories] = useState("");

  return (
    <PhoneAccessoriesDetailsContext.Provider value={{ selectedPhoneAccessories, setSelectedPhoneAccessories }}>
      {children}
    </PhoneAccessoriesDetailsContext.Provider>
  );
};

export const usePhoneAccessoriesDetails = () => useContext(PhoneAccessoriesDetailsContext);