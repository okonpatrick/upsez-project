//LaptopContainer.jsx
import PhoneAccessoriesData from "../../JsonFiles/PhoneAccessoriesCard.json";
import PhoneAccessoriesDetails from './PhoneAccessoriesDetails';

export default function PhoneAccessoriesContainer() {
  return (
    <div className="">
           <PhoneAccessoriesDetails PhoneAccessories={PhoneAccessoriesData} />
     </div>
  );
}