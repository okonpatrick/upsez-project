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