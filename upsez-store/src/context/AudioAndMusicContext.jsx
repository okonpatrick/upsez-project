//LaptopDetailsContext.js
import { createContext, useContext, useState } from 'react';

const AudioAndMusicDetailsContext = createContext();

export const AudioAndMusicDetailsProvider = ({ children }) => {
  const [selectedAudioAndMusic, setSelectedAudioAndMusic] = useState("");

  return (
    <AudioAndMusicDetailsContext.Provider value={{ selectedAudioAndMusic, setSelectedAudioAndMusic }}>
      {children}
    </AudioAndMusicDetailsContext.Provider>
  );
};

export const useAudioAndMusicDetails = () => useContext(AudioAndMusicDetailsContext);