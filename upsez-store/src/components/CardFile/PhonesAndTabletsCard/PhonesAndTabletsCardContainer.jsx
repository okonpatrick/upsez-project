//LaptopContainer.jsx
import PhonesAndTabletsData from "../../JsonFiles/PhonesAndTabletsCard.json"
import PhonesAndTabletsDetails from "./PhonesAndTabletsCardDetails";

export default function PhonesAndTabletsContainer() {
  return (
    <div className="">
           <PhonesAndTabletsDetails PhonesAndTablets={PhonesAndTabletsData} />
     </div>
  );
}