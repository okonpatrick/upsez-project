//LaptopContainer.jsx
import PhoneAccessoriesData from "../../JsonFiles/PhoneAccessoriesCard.json";
import PhoneAccessoriesDetails from './PhoneAccessoriesDetails';

export default function PhoneAccessoriesContainer() {
  return (
      <PhoneAccessoriesDetails PhoneAccessories={PhoneAccessoriesData} />
  );
}