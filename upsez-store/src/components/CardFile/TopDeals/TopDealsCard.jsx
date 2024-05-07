import "../../JsonFiles/JsonCardData.json";

export default function TopDealsCard({  itemName, 
    imageSrc, 
    condition,
    price,
    brand,
    capacity,
    graphicsCard,
    operatingSystem,
    touchscreen,
    description,
    model,
    ram,
    processor,
    displaySize,
    storageType,
    colour,
    frameMaterial,
    title,
    category,
    location,
    availability,
    payOnDelivery,
    fingerprint,
    sellerId,
    sellerPhoneNo,
    batteryLife}) {

  return (
<div className='border p-3 text-black border-white text-lg'>
  <img src={imageSrc} alt={itemName} width={400} />
  <p className='text-black font-bold text-center'>{itemName}</p>
  <p>Price: {price}</p>
  <p>Condition: {condition}</p>
  <p>Brand: {brand}</p>
  <p>Availability: {availability ? 'Available' : 'Not Available'}</p>
  <p>Location: {location}</p>
  <p>Description: {description}</p>
  <p>Category: {category}</p>
  <p>RAM: {ram}</p>
  <p>Processor: {processor}</p>
  <p>Display Size: {displaySize}</p>
  <p>Storage Type: {storageType}</p>
  <p>Colour: {colour}</p>
  <p>Frame Material: {frameMaterial}</p>
  <p>Title: {title}</p>
  <p>Touchscreen: {touchscreen ? 'Yes' : 'No'}</p>
  <p>Pay on Delivery: {payOnDelivery ? 'Yes' : 'No'}</p>
  <p>Fingerprint: {fingerprint ? 'Yes' : 'No'}</p>
  <p>Seller ID: {sellerId}</p>
  <p>Seller Phone No: {sellerPhoneNo}</p>
  <p>Battery Life: {batteryLife}</p>
</div>

  )
}