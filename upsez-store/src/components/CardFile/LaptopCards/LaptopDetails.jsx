// LaptopDetails.jsx
import { useNavigate } from 'react-router-dom';
import { useLaptopDetails } from '../../../context/LaptopDetailsContext';

const LaptopDetails = ({ laptops }) => {
  const navigate = useNavigate();
  const { setSelectedLaptop } = useLaptopDetails();

  const handleLaptopClick = (laptop) => {
    setSelectedLaptop(laptop);
    navigate(`/${laptop.brand}/LaptopDetail/${laptop.id}`);
  };

  return (
    <div className='border p-3 text-black border-gray-300 rounded-lg m-2 text-lg flex lg:m-2 grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:m-20 sm:text-sm'>
      {laptops.map((laptop) => (
        <div key={laptop.id} onClick={() => handleLaptopClick(laptop)} className='border p-3 text-black border-gray-300 rounded-lg m-2 text-lg'>
          <img src={laptop.imageSrc} alt={laptop.itemName} />
          <p>Price: <span className='text-2xl sm:pl-0 md:pl-0 pl-2 font-bold'>₦{laptop.price}</span></p>
          <p className='text-xl'>Brand: {laptop.brand}</p>
          <p>Item Name: {laptop.itemName}</p>
          <p> Model: {laptop.model}</p>
          <p>Capacity: {laptop.capacity}</p>
        <div className='flex'> 
        <p>RAM: {laptop.ram}</p>
        <p> Processor: {laptop.processor}</p>
          </div>
      
        </div>
      ))}
    </div>
  );
};

export default LaptopDetails;
