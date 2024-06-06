// LaptopDetails.jsx
import { useNavigate } from 'react-router-dom';
import { usePhoneAccessoriesDetails } from '../../../context/PhoneAccessoriesContext';

const PhoneAccessoriesDetails = ({ PhoneAccessories }) => {
  const navigate = useNavigate();
  const { setSelectedPhoneAccessories } = usePhoneAccessoriesDetails();

  const handleLaptopClick = (PhoneAccessories) => {
    setSelectedPhoneAccessories(PhoneAccessories);
    navigate(`/${PhoneAccessories.brand}/PhoneAccessoriesDetail/${PhoneAccessories.id}`);
  };

  return (
    <div className='border p-3 text-black border-gray-300 rounded-lg m-2 text-lg flex lg:m-2 grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:m-20 sm:text-sm'>
      {PhoneAccessories.map((PhoneAccessories) => (
        <div key={PhoneAccessories.id} onClick={() => handleLaptopClick(PhoneAccessories)} className='border p-3 text-black border-gray-300 rounded-lg m-2 text-lg'>
          <img src={PhoneAccessories.imageSrc} alt={PhoneAccessories.itemName} />
          <p>Price: <span className='text-2xl sm:pl-0 md:pl-0 pl-2 font-bold'>₦{PhoneAccessories.price}</span></p>
          <p className='text-xl'>Brand: {PhoneAccessories.brand}</p>
          <p>Item Name: {PhoneAccessories.itemName}</p>
          <p> Model: {PhoneAccessories.model}</p>
          <p>Capacity: {PhoneAccessories.capacity}</p>
        <div className='flex'> 
        <p>RAM: {PhoneAccessories.ram}</p>
        <p> Processor: {PhoneAccessories.processor}</p>
          </div>
      
        </div>
      ))}
    </div>
  );
};

export default PhoneAccessoriesDetails;
