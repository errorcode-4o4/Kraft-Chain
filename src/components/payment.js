import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('debitCard');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [upiId, setUpiId] = useState('');

  const handlePayment = () => {
    // Handle payment processing (usually done on the server)
    console.log('Processing payment...');
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="w-full max-w-md mx-auto p-8 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Payment Details</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">Select Payment Method</label>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                value="debitCard"
                checked={paymentMethod === 'debitCard'}
                onChange={() => setPaymentMethod('debitCard')}
                className="form-radio text-blue-500 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
              Debit Card
              <div className="flex items-center space-x-2 ml-4">
                <FontAwesomeIcon icon={faCcVisa} className="text-2xl text-blue-500" />
                <FontAwesomeIcon icon={faCcMastercard} className="text-2xl text-red-500" />
              </div>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="upi"
                checked={paymentMethod === 'upi'}
                onChange={() => setPaymentMethod('upi')}
                className="form-radio text-green-500 focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200"
              />
              UPI
              <div className="flex items-center space-x-2 ml-4">
                <img
                  src="https://th.bing.com/th/id/OIP.eZvb56xjmEhYl5WUTFM4BwAAAA?rs=1&pid=ImgDetMain" // Replace with the actual path to your UPI symbol image
                  alt="UPI"
                  className="h-8"
                />
              </div>
            </label>
          </div>
        </div>
        {paymentMethod === 'debitCard' && (
          <>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-gray-600 text-sm font-semibold mb-2">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="expiryDate" className="block text-gray-600 text-sm font-semibold mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="MM/YY"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="cvc" className="block text-gray-600 text-sm font-semibold mb-2">
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </>
        )}
        {paymentMethod === 'upi' && (
          <div className="mb-4">
            <label htmlFor="upiId" className="block text-gray-600 text-sm font-semibold mb-2">
              UPI ID
            </label>
            <input
              type="text"
              id="upiId"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
        )}
        <button
          type="button"
          onClick={handlePayment}
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none"
        >
          Pay Now
        </button>
        <div className="flex justify-center w-full mt-4">
        <Link className='w-full' to="/">
            <button className="enableButton w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-5 rounded text-sm">
              Go Back
            </button>
          </Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Payment;

