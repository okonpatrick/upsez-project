
import { useState } from "react";
// LaptopCard.jsx
import "../../JsonFiles/PhonesAndTabletsCard.json";
import imageSrc2 from "../../../assets/img/Laptops/laptops.jpg";

export default function PhonesAndTabletsCard({ PhonesAndTablets }) {
    const [isCart, setCart] = useState();
  return (
    <div className="border p-3 text-black border-gray-300 rounded-lg m-2 text-lg">
      <img src={PhonesAndTablets.imageSrc} alt={PhonesAndTablets.itemName} />
      <img src={imageSrc2} alt="image of a laptop"/>
      <h3 className='text-black font-bold text-center p-2 text-lg'>{PhonesAndTablets.itemName}</h3>
      <div className=' lg:mr-10 md:flex text-black font-bold'>Price: ${PhonesAndTablets.price} <p className='lg:pl-40 font-bold text-orange-500'> {laptop.condition}</p>
</div>
      <p>Brand: {PhonesAndTablets.brand}</p>
      <p>Description: {PhonesAndTablets.description}</p>
      <p>Location: {PhonesAndTablets.location}</p>

      <div className='border p-2 mt-2 lg:mr-60 rounded-2xl text-white text-center font-bold bg-orange-500 sm:rounded-lg'><a href={isCart}>Add to Cart</a></div>
      {/* Add more details as needed */}
    </div>
  );
}