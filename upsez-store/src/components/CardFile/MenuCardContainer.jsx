import { useState, useEffect } from 'react';
import menuData from '../JsonFiles/JsonCardData.json';
import MenuCard from "../MenuCard";
import { useNavigate } from 'react-router-dom';

export default function MenuCardContainer() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate(); // Get the navigate function from useNavigate()

  useEffect(() => {
    // Fetch data from JSON file
    setItems(menuData);
  }, []); // Removed items from the dependency array since we only need to fetch data once

  // Function to route to the appropriate component based on itemName
  function routeToWaitFilterComponent(id) {
    if (id === 1) {
      navigate("/waitfilter/laptops");
    } else if (id === 2) {
      navigate("/waitfilter/phones&tablets");
    }
    else if (id === 3) {
      navigate("/waitfilter/phones&tablets");
    }
    else if (id === 4) {
      navigate("/waitfilter/audio&music");
    }
    else if (id === 5) {
      navigate("/waitfilter/eyecare&jewelry");
    }
    else if (id === 6) {
      navigate("/waitfilter/computer-accessories");
    }
    else if (id === 7) {
      navigate("/waitfilter/other-Services");
    }
    // Add more conditions for other items if needed
  }

  return (
    <div className="lg:m-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-0 sm:m-20 sm:text-sm">
      {items.map((item, index) => (
        <a href='' onClick={() => routeToWaitFilterComponent(item.id)} key={index}>
          <MenuCard id={item.id} itemName={item.itemName} imageSrc={item.imageSrc} />
        </a>
      ))}
    </div>
  );
}
