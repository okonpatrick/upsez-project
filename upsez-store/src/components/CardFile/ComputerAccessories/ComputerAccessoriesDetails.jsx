// LaptopDetails.jsx
import { useNavigate } from 'react-router-dom';
//import { useComputerAccessoriesDetails } from '../../../context/ComputerAccessoriesDetailsContext';
import {useComputerAccessoriesDetails} from "../../../context/ComputerAccessoriesContext";

const ComputerAccessoriesDetails = ({ ComputerAccessories }) => {
  const navigate = useNavigate();
  const { setSelectedComputerAccessories } = useComputerAccessoriesDetails();

  const handleComputerAccessoriesClick = (ComputerAccessories) => {
    setSelectedComputerAccessories(ComputerAccessories);
    navigate(`/${ComputerAccessories.brand}/ComputerAccessoriesDetail/${ComputerAccessories.id}`);
  };

  return (
    <div className='border p-3 text-black border-gray-300 rounded-lg m-2 text-lg flex lg:m-2 grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:m-20 sm:text-sm'>
      {ComputerAccessories.map((ComputerAccessories) => (
        <div key={ComputerAccessories.id} onClick={() => handleComputerAccessoriesClick(ComputerAccessories)} className='border p-3 text-black border-gray-300 rounded-lg m-2 text-lg'>
          <img src={ComputerAccessories.imageSrc} alt={ComputerAccessories.itemName} />
          <p>Price: <span className='text-2xl sm:pl-0 md:pl-0 pl-2 font-bold'>₦{ComputerAccessories.price}</span></p>
          <p className='text-xl'>Brand: {ComputerAccessories.brand}</p>
          <p>Item Name: {ComputerAccessories.itemName}</p>
          <p> Model: {ComputerAccessories.model}</p>
          <p>Capacity: {ComputerAccessories.capacity}</p>
        <div className='flex'> 
        <p>RAM: {ComputerAccessories.ram}</p>
        <p> Processor: {ComputerAccessories.processor}</p>
          </div>
      
        </div>
      ))}
    </div>
  );
};

export default ComputerAccessoriesDetails;