import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handlePayment = async () => {
    try {
      // Replace 'YOUR_BACKEND_API_URL' with your actual backend API endpoint
      const response = await axios.post('YOUR_BACKEND_API_URL/charge', {
        cardNumber,
        expiryDate,
        cvc,
      });

      console.log(response.data); // Handle the response as needed

    } catch (error) {
      console.error('Error processing payment:', error.message);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto bg-white p-8 border border-gray-300">
        <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Card Number</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300"
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Expiry Date</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300"
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">CVC</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300"
            onChange={(e) => setCvc(e.target.value)}
          />
        </div>
        
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handlePayment}
        >
          Process Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
