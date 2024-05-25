
import { useState } from "react";
// PhoneAccessoriesCard.jsx
import "../../JsonFiles/PhoneAccessoriesCard.json";
import imageSrc2 from "../../../assets/img/PhoneAccessories/laptops.jpg";

export default function PhoneAccessoriesCard({ PhoneAccessories }) {
    const [isCart, setCart] = useState();
  return (
    <div className="border p-3 text-black border-gray-300 rounded-lg m-2 text-lg">
      <img src={PhoneAccessories.imageSrc} alt={PhoneAccessories.itemName} />
      <img src={imageSrc2} alt="image of a laptop"/>
      <h3 className='text-black font-bold text-center p-2 text-lg'>{PhoneAccessories.itemName}</h3>
      <div className=' lg:mr-10 md:flex text-black font-bold'>Price: ${PhoneAccessories.price} <p className='lg:pl-40 font-bold text-orange-500'> {PhoneAccessories.condition}</p>
</div>
      <p>Brand: {PhoneAccessories.brand}</p>
      <p>Description: {PhoneAccessories.description}</p>
      <p>Location: {PhoneAccessories.location}</p>

      <div className='border p-2 mt-2 lg:mr-60 rounded-2xl text-white text-center font-bold bg-orange-500 sm:rounded-lg'><a href={isCart}>Add to Cart</a></div>
      {/* Add more details as needed */}
    </div>
  );
}