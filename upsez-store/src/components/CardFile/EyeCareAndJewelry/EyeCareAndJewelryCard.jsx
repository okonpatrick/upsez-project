
import { useState } from "react";
// EyeCareAndJewelryCard.jsx
import "../../JsonFiles/EyeCareAndJewelryCard.json";
import imageSrc2 from "../../../assets/img/EyeCareAndJewelry/laptops.jpg";

export default function EyeCareAndJewelryCard({ EyeCareAndJewelry }) {
    const [isCart, setCart] = useState();
  return (
    <div className="border p-3 text-black border-gray-300 rounded-lg m-2 text-lg">
      <img src={EyeCareAndJewelry.imageSrc} alt={EyeCareAndJewelry.itemName} />
      <img src={imageSrc2} alt="image of a laptop"/>
      <h3 className='text-black font-bold text-center p-2 text-lg'>{EyeCareAndJewelry.itemName}</h3>
      <div className=' lg:mr-10 md:flex text-black font-bold'>Price: ${EyeCareAndJewelry.price} <p className='lg:pl-40 font-bold text-orange-500'> {laptop.condition}</p>
</div>
      <p>Brand: {EyeCareAndJewelry.brand}</p>
      <p>Description: {EyeCareAndJewelry.description}</p>
      <p>Location: {EyeCareAndJewelry.location}</p>

      <div className='border p-2 mt-2 lg:mr-60 rounded-2xl text-white text-center font-bold bg-orange-500 sm:rounded-lg'><a href={isCart}>Add to Cart</a></div>
      {/* Add more details as needed */}
    </div>
  );
}