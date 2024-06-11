// EyeCareAndJewelryDetails.jsx
import { useNavigate } from "react-router-dom";
import { useEyeCareAndJewelryDetails } from "../../../context/EyeCareAndJewelryContext";

const EyeCareAndJewelryDetails = ({ EyeCareAndJewelry }) => {
  const navigate = useNavigate();
  const { setSelectedEyeCareAndJewelry } = useEyeCareAndJewelryDetails();

  const handleEyeCareAndJewelryClick = (EyeCareAndJewelry) => {
    setSelectedEyeCareAndJewelry(EyeCareAndJewelry);
    navigate(`/${EyeCareAndJewelry.brand}/EyeCareAndJewelryDetail/${EyeCareAndJewelry.id}`
    );
  };

  return (
    <div className="border p-3 text-black border-gray-300 rounded-lg m-2 text-lg flex lg:m-2 grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:m-20 sm:text-sm">
      {EyeCareAndJewelry.map((EyeCareAndJewelry) => (
        <div
          key={EyeCareAndJewelry.id}
          onClick={() => handleEyeCareAndJewelryClick(EyeCareAndJewelry)}
          className="border p-3 text-black border-gray-300 rounded-lg m-2 text-lg"
        >
          <img
            src={EyeCareAndJewelry.imageSrc}
            alt={EyeCareAndJewelry.itemName}
          />
          <p>
            Price:{" "}
            <span className="text-2xl sm:pl-0 md:pl-0 pl-2 font-bold">
              ₦{EyeCareAndJewelry.price}
            </span>
          </p>
          <p className="text-xl">Brand: {EyeCareAndJewelry.brand}</p>
          <p>Item Name: {EyeCareAndJewelry.itemName}</p>
          <p> Model: {EyeCareAndJewelry.model}</p>
          <p>Capacity: {EyeCareAndJewelry.capacity}</p>
          <div className="flex">
            <p>RAM: {EyeCareAndJewelry.ram}</p>
            <p> Processor: {EyeCareAndJewelry.processor}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EyeCareAndJewelryDetails;