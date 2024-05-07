import "./JsonFiles/JsonCardData.json";

export default function MenuCard({itemName, imageSrc}) {
  return (
    <div className='border rounded-2xl p-2 text-black border-gray-300 m-1 text-lg'>
      
      <img src={imageSrc} alt={itemName} width={400} />
      <p className='text-black font-bold text-center'>{itemName}</p>
    </div>
  );
}