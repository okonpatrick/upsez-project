//ComputerAccessoriesContainer.jsx
//import ComputerAccessoriesData from "../../JsonFiles/ComputerAccessoriesCard.json";
import ComputerAccessoriesData from "../../JsonFiles/ComputerAccessoriesData.json"
import ComputerAccessoriesDetails from './ComputerAccessoriesDetails';

export default function ComputerAccessoriesContainer() {
  return (
    <div className="">
           <ComputerAccessoriesDetails ComputerAccessories={ComputerAccessoriesData} />
     </div>
  );
}