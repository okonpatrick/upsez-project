import { useState, useEffect } from 'react';
import menuData from '../../JsonFiles/JsonCardData.json';
import TopDealsCard from './TopDealsCard';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function TopDealsContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Create a copy of the menuData array
    const menuDataCopy = [...menuData];
    // Shuffle the copied array
    const shuffledData = shuffleArray(menuDataCopy);
    // Set the shuffled data as items
    setItems(shuffledData);
  }, []);

  return (
    <div className="lg:m-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-0 sm:m-20 sm:text-sm">
      {items.map((item, index) => (
        <TopDealsCard
          key={index}
          itemName={item.itemName}
        imageSrc={item.imageSrc}
        price={item.price}
        condition={item.condition}
        brand={item.brand}
        capacity={item.capacity}
        graphicsCard={item['graphics-card']}
        operatingSystem={item['operating-system']}
        touchscreen={item.touchscreen}
        description={item.description}
        model={item.model}
        ram={item.ram}
        processor={item.processor}
        displaySize={item['display-size']}
        storageType={item['storage-type']}
        colour={item.colour}
        frameMaterial={item['frame-material']}
        title={item.title}
        category={item.category}
        location={item.location}
        availability={item.availability}
        payOnDelivery={item['pay-on-delivery']}
        fingerprint={item.fingerprint}
        sellerId={item['seller-id']}
        sellerPhoneNo={item['seller-phone-no']}
        batteryLife={item['battery-life']}
        />
      ))}
    </div>
  );
}
