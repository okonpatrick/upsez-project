// LaptopDetailsPage.jsx
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { usePhonesAndTabletsDetails } from '../../../context/PhonesAndTabletsContext';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SearchForm from '../../Forms/SearchBar';
import Navbar from "../../LocalNavbar";
import { useCart} from '../../../context/CartProvider';
import PhonesAndTabletsData from "../../JsonFiles/PhonesAndTabletsCard.json";
import "../../JsonFiles/LaptopCard.json";

export const PhonesAndTabletsDetailsPage = () => {
  const [cartInitialNumber, setCartNumber] = useState(0);
  const { id, brand } = useParams(); // Get the parameters from the URL
  const [loading, setLoading] = useState(true);
  const { selectedPhonesAndTablets, setSelectedPhonesAndTablets } = usePhonesAndTabletsDetails();
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
  //   addToCart({ ...setSelectedPhonesAndTablets, quantity: cartInitialNumber });
  // };  
  
  const handleAddToCart = () => {
    const quantity = cartInitialNumber;
    //addToCart({ ...setSelectedPhonesAndTablets, quantity });
    addToCart(selectedPhonesAndTablets, quantity);
    setIsAddedToCart(true); // Set message state to true
    setTimeout(() => setIsAddedToCart(false), 5000);
  };

  useEffect(() => {
    const fetchPhonesAndTabletsDetails = async () => {
      try {
        // Ensure laptopData is loaded before using it
        if (!PhonesAndTabletsData) return; // Handle case where data isn't loaded yet
  
        // Consider type conversion if necessary (e.g., convert URL id to number)
        const idAsNumber = parseInt(id);
        const filteredPhonesAndTablets = PhonesAndTabletsData.find(
          (PhonesAndTablets) => PhonesAndTablets.id === idAsNumber && PhonesAndTablets.brand === brand
        );
  
        if (!filteredPhonesAndTablets) {
          setSelectedPhonesAndTablets(null); // Set setSelectedPhonesAndTablets to null to indicate not found
          throw new Error('Phone and Tablets not found');
        }
        setSelectedPhonesAndTablets(filteredPhonesAndTablets);
      } catch (error) {
        console.error('Error fetching phones and laptop details:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };
  
    fetchPhonesAndTabletsDetails();
  }, [id, brand, setSelectedPhonesAndTablets]);

  return (
<>
<Navbar/>
<SearchForm/>
<div className='lg:flex  m-auto lg:ml-40'>
<div className=' border-gray-300  flex lg:m-2 grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-1  sm:m-20 sm:text-sm lg:ml-2 sm:ml-2 mb-0'  style={{ width: '400px', height: '380px'}}>
<Carousel className="rounded-xl text-center lg:w-96" >
   
    
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
       <h2 className=''>Category: {setSelectedPhonesAndTablets.category}</h2>
      <p className=''>Brand: {setSelectedPhonesAndTablets.brand}</p>
      <p>Item Name: {setSelectedPhonesAndTablets.itemName}</p>
      <p className=''>Price: <span className='font-bold'>₦{setSelectedPhonesAndTablets.price}</span> </p>
      <p>Condition: {setSelectedPhonesAndTablets.condition}</p>
      <p>Capacity: {setSelectedPhonesAndTablets.capacity}</p>
      <p>Graphics Card: {setSelectedPhonesAndTablets['graphics-card']}</p>
      <p>Operating System: {setSelectedPhonesAndTablets['operating-system']}</p>
      <p>Touchscreen: {setSelectedPhonesAndTablets.touchscreen ? 'Yes' : 'No'}</p>
      <p>Model: {setSelectedPhonesAndTablets.model}</p>
      <p>RAM: {setSelectedPhonesAndTablets.ram}</p>
      <p>Processor: {setSelectedPhonesAndTablets.processor}</p>
      <p>Display Size: {setSelectedPhonesAndTablets['display-size']}</p>
      <p>Storage Type: {setSelectedPhonesAndTablets['storage-type']}</p>
      <p>Colour: {setSelectedPhonesAndTablets.colour}</p>
      <p>Frame Material: {setSelectedPhonesAndTablets['frame-material']}</p>
      <p>Location: {setSelectedPhonesAndTablets.location}</p>
      <p>Availability: {setSelectedPhonesAndTablets.availability ? 'Available' : 'Not Available'}</p>
      <p>Pay on Delivery: {setSelectedPhonesAndTablets['pay-on-delivery'] ? 'Yes' : 'No'}</p>
      <p>Fingerprint: {setSelectedPhonesAndTablets.fingerprint ? 'Yes' : 'No'}</p>
      <p>Seller ID: {setSelectedPhonesAndTablets['seller-id']}</p>
      <p>Seller Phone No: {setSelectedPhonesAndTablets['seller-phone-no']}</p>
      <p>Battery Life: {setSelectedPhonesAndTablets['battery-life']}</p>   
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
  //       setsetSelectedPhonesAndTablets(filteredLaptop);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching laptop details:', error);
  //     }
  //   };

  //   fetchLaptopDetails();
  // }, [id, brand, setsetSelectedPhonesAndTablets]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!setSelectedPhonesAndTablets) {
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
  //       setsetSelectedPhonesAndTablets(filteredLaptop);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching laptop details:', error);
  //     }
  //   };

  //   fetchLaptopDetails();
  // }, [id, brand, setsetSelectedPhonesAndTablets]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!setSelectedPhonesAndTablets) {
  //   return <div>No laptop details found</div>;
  // }
