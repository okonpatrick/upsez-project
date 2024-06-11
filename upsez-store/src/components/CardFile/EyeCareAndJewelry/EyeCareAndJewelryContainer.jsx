//LaptopContainer.jsx
import EyeCareAndJewelryData from "../../JsonFiles/EyeCareAndJewelryData.json";
import EyeCareAndJewelryDetails from './EyeCareAndJewelryDetails';

export default function EyeCareAndJewelryContainer() {
  return (
    <div className="">
           <EyeCareAndJewelryDetails EyeCareAndJewelry={EyeCareAndJewelryData} />
     </div>
  );
}