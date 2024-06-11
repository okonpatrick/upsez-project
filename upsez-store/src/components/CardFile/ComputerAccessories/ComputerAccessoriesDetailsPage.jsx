// LaptopDetailsPage.jsx
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useComputerAccessoriesDetails } from '../../../context/ComputerAccessoriesContext';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SearchForm from '../../Forms/SearchBar';
import Navbar from "../../LocalNavbar";
import { useCart} from '../../../context/CartProvider';
import ComputerAccessoriesData from "../../JsonFiles/ComputerAccessoriesData.json"
//import "../../JsonFiles/ComputerAccessoriesCard.json";
import "../../JsonFiles/ComputerAccessoriesData.json";

export const ComputerAccessoriesDetailsPage = () => {
  const [cartInitialNumber, setCartNumber] = useState(0);
  const { id, brand } = useParams(); // Get the parameters from the URL
  const [loading, setLoading] = useState(true);
  const { selectedComputerAccessories, setSelectedComputerAccessories } = useComputerAccessoriesDetails();
  const {addToCart} = useCart();
  const [isAddedToCart, setIsAddedToCart] = useState(false); // New state for message

const incrementCount = ()=> {
  setCartNumber(cartInitialNumber + 1)
}

const decrementCount = () => {
  // Prevent negative quantity
  setCartNumber(Math.max(cartInitialNumber - 1, 0)); // Ensures quantity doesn't go below 0
};

  const handleAddToCart = () => {
    const quantity = cartInitialNumber;
    //addToCart({ ...selectedLaptop, quantity });
    addToCart(selectedComputerAccessories, quantity);
    setIsAddedToCart(true); // Set message state to true
    setTimeout(() => setIsAddedToCart(false), 5000);
  };

  useEffect(() => {
    const fetchComputerAccessoriesDetails = async () => {
      try {
        // Ensure laptopData is loaded before using it
        if (!ComputerAccessoriesData) return; // Handle case where data isn't loaded yet
  
        // Consider type conversion if necessary (e.g., convert URL id to number)
        const idAsNumber = parseInt(id);
        const filteredComputerAccessories = ComputerAccessoriesData.find(
          (ComputerAccessories) => ComputerAccessories.id === idAsNumber && ComputerAccessories.brand === brand
        );
  
        if (!filteredComputerAccessories) {
          setSelectedComputerAccessories(null); // Set selectedLaptop to null to indicate not found
          throw new Error('ComputerAccessories not found');
        }
        setSelectedComputerAccessories(filteredComputerAccessories);
      } catch (error) {
        console.error('Error fetching ComputerAccessories details:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };
  
    fetchComputerAccessoriesDetails();
  }, [id, brand, setSelectedComputerAccessories]);

  return (
<>
<Navbar/>
<SearchForm/>
<div className='lg:flex  m-auto lg:ml-40'>
<div className=' border-gray-300  flex lg:m-2 grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1  sm:m-20 sm:text-sm lg:ml-2 sm:ml-2 mb-0'  style={{ width: '400px', height: '380px'}}>
<Carousel className="rounded-xl text-center lg:w-96" >
    <img
      src={selectedComputerAccessories.imageSrc} 
      alt={selectedComputerAccessories.itemName}      
    />
    <img
      src={selectedComputerAccessories.imageSrc}
      alt={selectedComputerAccessories.itemName}    
    />
    <img
      src={selectedComputerAccessories.imageSrc}
      alt={selectedComputerAccessories.itemName}
    />
     <img
      src={selectedComputerAccessories.imageSrc}
      alt={selectedComputerAccessories.itemName}  
    />
     <img
      src={selectedComputerAccessories.imageSrc}
      alt={selectedComputerAccessories.itemName}  
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
    <div className='mt-16 p-4 lg:pt-1 pt-6 border lg:ml-3 md:m-2 align-center  sm:text-sm'>  
       <div className=' lg:text-sm'>
       <h2 className=''>Category: {selectedComputerAccessories.category}</h2>
      <p className=''>Brand: {selectedComputerAccessories.brand}</p>
      <p>Item Name: {selectedComputerAccessories.itemName}</p>
      <p className=''>Price: <span className='font-bold'>₦{selectedComputerAccessories.price}</span> </p>
      <p>Condition: {selectedComputerAccessories.condition}</p>
      <p>Capacity: {selectedComputerAccessories.capacity}</p>
      <p>Graphics Card: {selectedComputerAccessories['graphics-card']}</p>
      <p>Operating System: {selectedComputerAccessories['operating-system']}</p>
      <p>Touchscreen: {selectedComputerAccessories.touchscreen ? 'Yes' : 'No'}</p>
      <p>Model: {selectedComputerAccessories.model}</p>
      <p>RAM: {selectedComputerAccessories.ram}</p>
      <p>Processor: {selectedComputerAccessories.processor}</p>
      <p>Display Size: {selectedComputerAccessories['display-size']}</p>
      <p>Storage Type: {selectedComputerAccessories['storage-type']}</p>
      <p>Colour: {selectedComputerAccessories.colour}</p>
      <p>Frame Material: {selectedComputerAccessories['frame-material']}</p>
      <p>Location: {selectedComputerAccessories.location}</p>
      <p>Availability: {selectedComputerAccessories.availability ? 'Available' : 'Not Available'}</p>
      <p>Pay on Delivery: {selectedComputerAccessories['pay-on-delivery'] ? 'Yes' : 'No'}</p>
      <p>Fingerprint: {selectedComputerAccessories.fingerprint ? 'Yes' : 'No'}</p>
      <p>Seller ID: {selectedComputerAccessories['seller-id']}</p>
      <p>Seller Phone No: {selectedComputerAccessories['seller-phone-no']}</p>
      <p>Battery Life: {selectedComputerAccessories['battery-life']}</p>   
</div>
        </div>
        </div>
        </> 
  );
};