import { useCart } from '../context/CartProvider';

const CheckOut = () => {
  const { cart } = useCart();
  
  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const handleContactSeller = () => {
    const phoneNumber = '+2348025633547';
    window.open(`tel:${phoneNumber}`);
  };

  const handleContactSellerEmail = () => {
    // Create email body with cart details
    var emailBody = `Dear Seller,\n\nI would like to purchase the following items from your store:\n\n`;
  
    // Loop through each item in the cart
    for (const item of cart) {
      // Add item details to the email body
      emailBody += `- ${item.itemName} (Quantity: ${item.quantity})\n`;
    }
  
    emailBody += `\nPlease contact me at [your email address] to finalize the purchase.\n\nThank you,\n[Your Name]\n`;
  
    // Redirect user's browser to email client with pre-populated message
    window.location.href = `mailto:upsez@gmail.com?subject=Order Inquiry&body=${encodeURIComponent(emailBody)}`;
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

                <div>Amount:{item.price * item.quantity} </div> 
              </div>
            </div>
          </div>
        ))}

        <div className='m-2 w-80 border'>Total: {calculateTotal()}</div>

        <div>
          <button onClick={handleContactSeller} className='text-white font-bold bg-orange-500 pt-2 pb-2 px-16 rounded-xl text-xl'>Contact Seller 📞</button>
        </div>
        <div>
        <button onClick={handleContactSellerEmail} className='text-orange-500 font-bold pt-1 pb-1 px-10 mt-3 underline text-xl'>Send us a mail!</button>

        </div>

        <div>
<a href="#" className="mt-40 block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-orange-100 dark:bg-white dark:border-gray-700 dark:hover:bg-gray-100">

<h5 className="mb-2 text-xl font-bold tracking-tight text-black dark:text-black"> Facing any challenge?</h5>
<p className="font-normal text-black dark:text-black">Screenshot this page and send to us through email, or on whatsapp!.Thank you!</p>
</a>

</div>
      </div>

    </div>
  );
};
export default CheckOut;