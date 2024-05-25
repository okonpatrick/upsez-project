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

export const PhoneAccessoriesDetailsPage = () => {
  const [cartInitialNumber, setCartNumber] = useState(0);
  const { id, brand } = useParams(); // Get the parameters from the URL
  const [loading, setLoading] = useState(true);
  const { selectedPhoneAccessories, setSelectedPhoneAccessories } = usePhoneAccessoriesDetails();
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
  //   addToCart({ ...selectedPhoneAccessories, quantity: cartInitialNumber });
  // };  
  
  const handleAddToCart = () => {
    const quantity = cartInitialNumber;
    //addToCart({ ...selectedPhoneAccessories, quantity });
    addToCart(selectedPhoneAccessories, quantity);
    setIsAddedToCart(true); // Set message state to true
    setTimeout(() => setIsAddedToCart(false), 5000);
  };

  useEffect(() => {
    const fetchPhoneAccessoriesDetails = async () => {
      try {
        // Ensure laptopData is loaded before using it
        if (!PhoneAccessoriesData) return; // Handle case where data isn't loaded yet
  
        // Consider type conversion if necessary (e.g., convert URL id to number)
        const idAsNumber = parseInt(id);
        const filteredLaptop = laptopData.find(
          (PhoneAccessories) => PhoneAccessories.id === idAsNumber && PhoneAccessories.brand === brand
        );
  
        if (!filteredPhoneAccessories) {
          setSelectedPhoneAccessories(null); // Set selectedPhoneAccessories to null to indicate not found
          throw new Error('Laptop not found');
        }
        setSelectedPhoneAccessories(filteredPhoneAccessories);
      } catch (error) {
        console.error('Error fetching laptop details:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };
  
    fetchPhoneAccessoriesDetails();
  }, [id, brand, setSelectedPhoneAccessories]);

  return (
<>
<Navbar/>
<SearchForm/>
<div className='lg:flex  m-auto lg:ml-40'>
<div className=' border-gray-300  flex lg:m-2 grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1  sm:m-20 sm:text-sm lg:ml-2 sm:ml-2 mb-0'  style={{ width: '400px', height: '380px'}}>
<Carousel className="rounded-xl text-center lg:w-96" >
    <img
      src={selectedPhoneAccessories.imageSrc} 
      alt={selectedPhoneAccessories.itemName}      
    />
    <img
      src={selectedPhoneAccessories.imageSrc}
      alt={selectedPhoneAccessories.itemName}    
    />
    <img
      src={selectedPhoneAccessories.imageSrc}
      alt={selectedPhoneAccessories.itemName}
    />
     <img
      src={selectedPhoneAccessories.imageSrc}
      alt={selectedPhoneAccessories.itemName}  
    />
     <img
      src={selectedPhoneAccessories.imageSrc}
      alt={selectedPhoneAccessories.itemName}  
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
       <h2 className=''>Category: {selectedPhoneAccessories.category}</h2>
      <p className=''>Brand: {selectedPhoneAccessories.brand}</p>
      <p>Item Name: {selectedPhoneAccessories.itemName}</p>
      <p className=''>Price: <span className='font-bold'>₦{selectedPhoneAccessories.price}</span> </p>
      <p>Condition: {selectedPhoneAccessories.condition}</p>
      <p>Capacity: {selectedPhoneAccessories.capacity}</p>
      <p>Graphics Card: {selectedPhoneAccessories['graphics-card']}</p>
      <p>Operating System: {selectedPhoneAccessories['operating-system']}</p>
      <p>Touchscreen: {selectedPhoneAccessories.touchscreen ? 'Yes' : 'No'}</p>
      <p>Model: {selectedPhoneAccessories.model}</p>
      <p>RAM: {selectedPhoneAccessories.ram}</p>
      <p>Processor: {selectedPhoneAccessories.processor}</p>
      <p>Display Size: {selectedPhoneAccessories['display-size']}</p>
      <p>Storage Type: {selectedPhoneAccessories['storage-type']}</p>
      <p>Colour: {selectedPhoneAccessories.colour}</p>
      <p>Frame Material: {selectedPhoneAccessories['frame-material']}</p>
      <p>Location: {selectedPhoneAccessories.location}</p>
      <p>Availability: {selectedPhoneAccessories.availability ? 'Available' : 'Not Available'}</p>
      <p>Pay on Delivery: {selectedPhoneAccessories['pay-on-delivery'] ? 'Yes' : 'No'}</p>
      <p>Fingerprint: {selectedPhoneAccessories.fingerprint ? 'Yes' : 'No'}</p>
      <p>Seller ID: {selectedPhoneAccessories['seller-id']}</p>
      <p>Seller Phone No: {selectedPhoneAccessories['seller-phone-no']}</p>
      <p>Battery Life: {selectedPhoneAccessories['battery-life']}</p>   
</div>
        </div>
        </div>
        </> 
  );
};

  // useEffect to fetch or set selected laptop details based on id and brand
  // useEffect(() => {
  //   const fetchLaptopDetails = () => {
  //     try {
  //       // Filter the laptop data based on id and brand
  //       const filteredLaptop = laptopData.find(laptop => laptop.id == id && laptop.brand == brand);
  //       if (!filteredLaptop) {
  //         throw new Error('Laptop not found');
  //       }
  //       setselectedPhoneAccessories(filteredLaptop);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching laptop details:', error);
  //     }
  //   };

  //   fetchLaptopDetails();
  // }, [id, brand, setselectedPhoneAccessories]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!selectedPhoneAccessories) {
  //   return <div>No laptop details found</div>;
  // }

  ////
  // useEffect(() => {
  //   const fetchLaptopDetails = async () => {
  //     try {
  //       // Filter the laptop data based on id and brand
  //       const filteredLaptop = laptopData.find(laptop => laptop.id == id && laptop.brand == brand);
  //       if (!filteredLaptop) {
  //         throw new Error('Laptop not found');
  //       }
  //       setselectedPhoneAccessories(filteredLaptop);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching laptop details:', error);
  //     }
  //   };

  //   fetchLaptopDetails();
  // }, [id, brand, setselectedPhoneAccessories]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!selectedPhoneAccessories) {
  //   return <div>No laptop details found</div>;
  // }
