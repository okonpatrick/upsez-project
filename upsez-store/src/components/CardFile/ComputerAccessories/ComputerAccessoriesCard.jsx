
import { useState } from "react";
// ComputerAccessoriesCard.jsx
import "../../JsonFiles/ComputerAccessoriesCard.json";
import imageSrc2 from "../../../assets/img/ComputerAccessories/ComputerAccessories.jpg";

export default function ComputerAccessoriesCard({ ComputerAccessories }) {
    const [isCart, setCart] = useState();
  return (
    <div className="border p-3 text-black border-gray-300 rounded-lg m-2 text-lg">
      <img src={ComputerAccessories.imageSrc} alt={ComputerAccessories.itemName} />
      <img src={imageSrc2} alt="image of a laptop"/>
      <h3 className='text-black font-bold text-center p-2 text-lg'>{ComputerAccessories.itemName}</h3>
      <div className=' lg:mr-10 md:flex text-black font-bold'>Price: ${ComputerAccessories.price} <p className='lg:pl-40 font-bold text-orange-500'> {laptop.condition}</p>
</div>
      <p>Brand: {ComputerAccessories.brand}</p>
      <p>Description: {ComputerAccessories.description}</p>
      <p>Location: {ComputerAccessories.location}</p>

      <div className='border p-2 mt-2 lg:mr-60 rounded-2xl text-white text-center font-bold bg-orange-500 sm:rounded-lg'><a href={isCart}>Add to Cart</a></div>
      {/* Add more details as needed */}
    </div>
  );
}