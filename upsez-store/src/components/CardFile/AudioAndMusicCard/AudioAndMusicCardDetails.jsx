// LaptopDetails.jsx
import { useNavigate } from 'react-router-dom';
//import { useAudioAndMusicDetails } from '../../../context/AudioAndMusicDetailsContext';
import { useAudioAndMusicDetails } from '../../../context/AudioAndMusicContext';

const AudioAndMusicDetails = ({ AudioAndMusic }) => {
  const navigate = useNavigate();
  const { setSelectedAudioAndMusic } = useAudioAndMusicDetails();

  const handleAudioAndMusicClick = (AudioAndMusic) => {
    setSelectedAudioAndMusic(AudioAndMusic);
    navigate(`/${AudioAndMusic.brand}/AudioAndMusicDetail/${AudioAndMusic.id}`);
  };

  return (
    <div className='border p-3 text-black border-gray-300 rounded-lg m-2 text-lg flex lg:m-2 grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:m-20 sm:text-sm'>
      {AudioAndMusic.map((AudioAndMusic) => (
        <div key={AudioAndMusic.id} onClick={() => handleAudioAndMusicClick(AudioAndMusic)} className='border p-3 text-black border-gray-300 rounded-lg m-2 text-lg'>
          <img src={AudioAndMusic.imageSrc} alt={AudioAndMusic.itemName} />
          <p>Price: <span className='text-2xl sm:pl-0 md:pl-0 pl-2 font-bold'>₦{AudioAndMusic.price}</span></p>
          <p className='text-xl'>Brand: {AudioAndMusic.brand}</p>
          <p>Item Name: {AudioAndMusic.itemName}</p>
          <p> Model: {AudioAndMusic.model}</p>
          <p>Capacity: {AudioAndMusic.capacity}</p>
        <div className='flex'> 
        <p>RAM: {AudioAndMusic.ram}</p>
        <p> Processor: {AudioAndMusic.processor}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AudioAndMusicDetails;