// LaptopDetailsPage.jsx
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useLaptopDetails } from '../../../context/LaptopDetailsContext';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SearchForm from '../../Forms/SearchBar';
import Navbar from "../../LocalNavbar";
import { useCart} from '../../../context/CartProvider';
import laptopData from "../../JsonFiles/LaptopCard.json";
import "../../JsonFiles/LaptopCard.json";

export const LaptopDetailsPage = () => {
  const [cartInitialNumber, setCartNumber] = useState(0);
  const { id, brand } = useParams(); // Get the parameters from the URL
  const [loading, setLoading] = useState(true);
  const { selectedLaptop, setSelectedLaptop } = useLaptopDetails();
  const {addToCart} = useCart();
  const [isAddedToCart, setIsAddedToCart] = useState(false); // New state for message

const incrementCount = ()=> {
  setCartNumber(cartInitialNumber + 1)
}

const decrementCount = () => {
  // Prevent negative quantity
  setCartNumber(Math.max(cartInitialNumber - 1, 0)); // Ensures quantity doesn't go below 0
};

  // const handleAddToCart = () => {
  //   addToCart({ ...selectedLaptop, quantity: cartInitialNumber });
  // };  
  
  const handleAddToCart = () => {
    const quantity = cartInitialNumber;
    //addToCart({ ...selectedLaptop, quantity });
    addToCart(selectedLaptop, quantity);
    setIsAddedToCart(true); // Set message state to true
    setTimeout(() => setIsAddedToCart(false), 5000);
  };

  useEffect(() => {
    const fetchLaptopDetails = async () => {
      try {
        // Ensure laptopData is loaded before using it
        if (!laptopData) return; // Handle case where data isn't loaded yet
  
        // Consider type conversion if necessary (e.g., convert URL id to number)
        const idAsNumber = parseInt(id);
        const filteredLaptop = laptopData.find(
          (laptop) => laptop.id === idAsNumber && laptop.brand === brand
        );
  
        if (!filteredLaptop) {
          setSelectedLaptop(null); // Set selectedLaptop to null to indicate not found
          throw new Error('Laptop not found');
        }
        setSelectedLaptop(filteredLaptop);
      } catch (error) {
        console.error('Error fetching laptop details:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };
  
    fetchLaptopDetails();
  }, [id, brand, setSelectedLaptop]);

  return (
<>
<Navbar/>
<SearchForm/>
<div className='lg:flex lg:ml-40'>
<div className=' border-gray-300  flex lg:m-2 grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1  sm:m-20 sm:text-sm lg:ml-2 sm:ml-2 mb-0'  style={{ width: '400px', height: '380px'}}>
<Carousel className="rounded-xl text-center lg:w-80" >
    <img
      src={selectedLaptop.imageSrc} 
      alt={selectedLaptop.itemName}      
    />
    <img
      src={selectedLaptop.imageSrc}
      alt={selectedLaptop.itemName}    
    />
    <img
      src={selectedLaptop.imageSrc}
      alt={selectedLaptop.itemName}
    />
     <img
      src={selectedLaptop.imageSrc}
      alt={selectedLaptop.itemName}  
    />
     <img
      src={selectedLaptop.imageSrc}
      alt={selectedLaptop.itemName}  
    />
     <img
      src={selectedLaptop.imageSrc}
      alt={selectedLaptop.itemName}  
    />
     <img
      src={selectedLaptop.imageSrc}
      alt={selectedLaptop.itemName}  
    />
     <img
      src={selectedLaptop.imageSrc}
      alt={selectedLaptop.itemName}  
    />
     <img
      src={selectedLaptop.imageSrc}
      alt={selectedLaptop.itemName}  
    />
     <img
      src={selectedLaptop.imageSrc}
      alt={selectedLaptop.itemName}  
    />
    
  </Carousel>
  <div className="text-center font-bold mb-2">
          <button className='text-xl pr-3'onClick={decrementCount}> - </button>
          <input type='number' className='justify-center border bg-gray-100 text-center'
          value={cartInitialNumber}
          onChange={(e) => setCartNumber(parseInt(e.target.value))}
          />
          <button className='pl-3' onClick={incrementCount}> + </button>
        </div>

        {isAddedToCart && (
  <div className="text-center text-green-500 font-bold mb-2">
    Item added to your cart!
  </div>
)}

  <button className='w-96 text-xl text-center border p-3 rounded-2xl text-white font-bold bg-orange-500 sm:rounded-lg'
   onClick={() => handleAddToCart(cartInitialNumber)} disabled={cartInitialNumber === 0} >Add to Cart</button>
</div>
    <div className='mt-16 p-4 lg:pt-1 pt-40 lg:pt-6 border lg:ml-3 md:m-2 align-center  sm:text-sm'>  
       <div className=' lg:text-sm'>
       <h2 className=''>Category: {selectedLaptop.category}</h2>
      <p className=''>Brand: {selectedLaptop.brand}</p>
      <p>Item Name: {selectedLaptop.itemName}</p>
      <p className=''>Price: <span className='font-bold'>₦{selectedLaptop.price}</span> </p>
      <p>Condition: {selectedLaptop.condition}</p>
      <p>Capacity: {selectedLaptop.capacity}</p>
      <p>Graphics Card: {selectedLaptop['graphics-card']}</p>
      <p>Operating System: {selectedLaptop['operating-system']}</p>
      <p>Touchscreen: {selectedLaptop.touchscreen ? 'Yes' : 'No'}</p>
      <p>Model: {selectedLaptop.model}</p>
      <p>RAM: {selectedLaptop.ram}</p>
      <p>Processor: {selectedLaptop.processor}</p>
      <p>Display Size: {selectedLaptop['display-size']}</p>
      <p>Storage Type: {selectedLaptop['storage-type']}</p>
      <p>Colour: {selectedLaptop.colour}</p>
      <p>Frame Material: {selectedLaptop['frame-material']}</p>
      <p>Location: {selectedLaptop.location}</p>
      <p>Availability: {selectedLaptop.availability ? 'Available' : 'Not Available'}</p>
      <p>Pay on Delivery: {selectedLaptop['pay-on-delivery'] ? 'Yes' : 'No'}</p>
      <p>Fingerprint: {selectedLaptop.fingerprint ? 'Yes' : 'No'}</p>
      <p>Seller ID: {selectedLaptop['seller-id']}</p>
      <p>Seller Phone No: {selectedLaptop['seller-phone-no']}</p>
      <p>Battery Life: {selectedLaptop['battery-life']}</p>   
</div>
        </div>
        </div>
        </> 
  );
};