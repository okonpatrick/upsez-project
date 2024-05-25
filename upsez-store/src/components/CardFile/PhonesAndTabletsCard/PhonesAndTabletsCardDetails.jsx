// LaptopDetails.jsx
import { useNavigate } from 'react-router-dom';
//import { useLaptopDetails } from '../../../context/LaptopDetailsContext';
import {usePhonesAndTabletsDetails} from "../../../context/PhonesAndTabletsContext";
import PhonesAndTablets from "../../JsonFiles/PhonesAndTabletsCard.json";
const PhonesAndTabletsDetails = ({ PhonesAndTablets }) => {
  const navigate = useNavigate();
  const { setSelectedPhonesAndTablets} = usePhonesAndTabletsDetails();

  const handlePhonesAndTabletsClick = (PhonesAndTablets) => {
    setSelectedPhonesAndTablets(PhonesAndTablets);
    navigate(`/${PhonesAndTablets.brand}/PhonesAndTabletsDetail/${PhonesAndTablets.id}`);
  };

  return (
    <div className='border p-3 text-black border-gray-300 rounded-lg m-2 text-lg flex lg:m-2 grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:m-20 sm:text-sm'>
      {PhonesAndTablets.map((PhonesAndTablets) => (
        <div key={PhonesAndTablets.id} onClick={() => handlePhonesAndTabletsClick(PhonesAndTablets)} className='border p-3 text-black border-gray-300 rounded-lg m-2 text-lg'>
          <img src={PhonesAndTablets.imageSrc} alt={PhonesAndTablets.itemName} />
          <p>Price: <span className='text-2xl sm:pl-0 md:pl-0 pl-2 font-bold'>₦{PhonesAndTablets.price}</span></p>
          <p className='text-xl'>Brand: {PhonesAndTablets.brand}</p>
          <p>Item Name: {PhonesAndTablets.itemName}</p>
          <p> Model: {PhonesAndTablets.model}</p>
          <p>Capacity: {PhonesAndTablets.capacity}</p>
        <div className='flex'> 
        <p>RAM: {PhonesAndTablets.ram}</p>
        <p> Processor: {PhonesAndTablets.processor}</p>
          </div>
      
        </div>
      ))}
    </div>
  );
};

export default PhonesAndTabletsDetails;