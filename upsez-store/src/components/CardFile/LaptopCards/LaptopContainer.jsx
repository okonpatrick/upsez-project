//LaptopContainer.jsx
import laptopData from "../../JsonFiles/LaptopCard.json";
import LaptopDetails from './LaptopDetails';

export default function LaptopContainer() {
  return (
    <div className="">
           <LaptopDetails laptops={laptopData} />
     </div>
  );
}

// <div className="border p-3 text-black border-gray-300 rounded-lg m-2 text-lg">
// <img src={laptop.imageSrc} alt={laptop.itemName} />
// <h3 className='text-black font-bold text-center'>{laptop.itemName}</h3>
// <div className='lg:mr-10 md:flex'>Price: ${laptop.price} <p className='lg:pl-40 font-bold text-orange-500'> {laptop.condition}</p></div>
// <p>Brand: {laptop.brand}</p>
// <p>Description: {laptop.description}</p>
// <p>Location: {laptop.location}</p>

// <div className='border p-2 mt-2 lg:mr-60 rounded-2xl text-white font-bold bg-orange-500 sm:rounded-lg'>
//     <button onClick={onClick}>Add to Cart</button>
// </div>
// </div>