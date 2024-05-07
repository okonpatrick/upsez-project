import { useCart } from '../context/CartProvider';

const CheckOut = () => {
  const { cart } = useCart();
  
  const handleContactSeller = () => {
    const phoneNumber = '+2348025633547';
    window.open(`tel:${phoneNumber}`);
  };

  return (
    <div className='flex justify-center'>
      <div className='text-center mx-auto p-8 m-10'>
        {cart.map((item) => (
          <div key={item.id} className='border p-2 m-2'>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
              <img src={item.imageSrc} alt={item.itemName} style={{ width: '100px', height: 'auto', marginRight: '10px' }} className='pb-2'/>
              <div>
                <p>{item.itemName} - ₦{item.price}</p>
                <p>Quantity: {item.quantity}</p> {/* Display item quantity */}
               
                {console.log(cart)}
                {console.log(typeof item.quantity)}
               {console.log(typeof cartInitialNumber)}

                <div>Amount:{item.price * item.quantity} </div> 
              </div>
            </div>
          </div>
        ))}

        <div>Total:<input className='m-2 w-80 border'></input></div>
        <div>
          <button onClick={handleContactSeller} className='text-white font-bold bg-orange-500 pt-2 pb-2 px-20 rounded-xl text-2xl'>Contact Seller 📞</button>
        </div>
      </div>
    </div>
  );
};
export default CheckOut;

// import { useCart } from '../context/CartProvider';

// const CheckOut = () => {
//   const { cart } = useCart(); // Get cart state from CartProvider context

//   const handleContactSeller = () => {
//     // Replace the phone number with the one you want to call
//     const phoneNumber = '+2348025633547';
//     window.open(`tel:${phoneNumber}`);
//   };

//   return (
//     <div className='flex justify-center'>
//       <div className='text-center mx-auto p-8 m-10'>
//         {cart.map((item) => ( // Iterate through cart items
//           <div key={item.id} className='border p-2 m-2'>
//             <div style={{ display: 'flex', marginBottom: '10px' }}>
//               <img src={item.imageSrc} alt={item.itemName} style={{ width: '100px', height: 'auto', marginRight: '10px' }} className='pb-2'/>
//               <div>
//                 <p>{item.itemName} - ₦{item.price.toFixed(2)}</p>  {/* Format price with 2 decimals */}
//                 <p>Quantity: {item.quantity}</p>
//                 {/* Add other item details here */}
//                 <div>Amount: ₦{(item.price * item.quantity).toFixed(2)}</div> {/* Format total amount with 2 decimals */}
//               </div>
//             </div>
//           </div>
//         ))}
//         <div>
//           <button onClick={handleContactSeller} className='text-white font-bold bg-orange-500 pt-2 pb-2 px-20 rounded-xl text-2xl'>Contact Seller </button>
//           {/* <p className='mx-auto'>08025633547</p> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckOut;
