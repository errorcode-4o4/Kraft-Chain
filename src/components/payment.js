// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons';

// const Payment = () => {
//   // const [cardNumber, setCardNumber] = useState('');
//   // const [expiryDate, setExpiryDate] = useState('');
//   // const [cvc, setCvc] = useState('');
//   const [selectedPaymentOption, setSelectedPaymentOption] = useState('');

//   const handlePayment = async () => {
//     try {
//       // Replace 'YOUR_BACKEND_API_URL' with your actual backend API endpoint
//       const response = await axios.post('YOUR_BACKEND_API_URL/charge', {
//         cardNumber,
//         expiryDate,
//         cvc,
//       });

//       console.log(response.data); // Handle the response as needed

//     } catch (error) {
//       console.error('Error processing payment:', error.message);
//     }
//   };
//   const [paymentMethod, setPaymentMethod] = useState('debitCard');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvc, setCvc] = useState('');
//   const [upiId, setUpiId] = useState('');

//   // return (
//   //   <>
//   //   <Navbar></Navbar>
//   //   <div className="max-w-md mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
//   //     <div className="flex items-center justify-center mb-6">
//   //       {/* <FontAwesomeIcon icon={faCreditCard} className="text-4xl text-blue-500 mr-2" /> */}
//   //       <h2 className="text-2xl font-semibold text-gray-800">Payment Details</h2>
//   //     </div>
//   //     <form>
//   //       <div className="mb-4">
//   //         <label htmlFor="cardNumber" className="block text-gray-600 text-sm font-semibold mb-2">
//   //           Card Number
//   //         </label>
//   //         <div className="relative">
//   //           <input
//   //             type="text"
//   //             id="cardNumber"
//   //             value={cardNumber}
//   //             onChange={(e) => setCardNumber(e.target.value)}
//   //             className="w-full p-3 pl-12 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//   //           />
//   //           {/* <FontAwesomeIcon icon={faCreditCard} className="absolute text-gray-400 left-4 top-3" /> */}
//   //         </div>
//   //       </div>
//   //       <div className="grid grid-cols-2 gap-4 mb-4">
//   //         <div>
//   //           <label htmlFor="expiryDate" className="block text-gray-600 text-sm font-semibold mb-2">
//   //             Expiry Date
//   //           </label>
//   //           <input
//   //             type="text"
//   //             id="expiryDate"
//   //             value={expiryDate}
//   //             onChange={(e) => setExpiryDate(e.target.value)}
//   //             placeholder="MM/YY"
//   //             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//   //           />
//   //         </div>
//   //         <div>
//   //           <label htmlFor="cvc" className="block text-gray-600 text-sm font-semibold mb-2">
//   //             CVV
//   //           </label>
//   //           <input
//   //             type="text"
//   //             id="cvc"
//   //             value={cvc}
//   //             onChange={(e) => setCvc(e.target.value)}
//   //             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//   //           />
//   //         </div>
//   //       </div>
//   //       <div className="mb-4">
//   //         <label className="block text-gray-600 text-sm font-semibold mb-2">Payment Options</label>
//   //         <div className="flex items-center space-x-4">
//   //           <label className="flex items-center">
//   //             <input
//   //               type="radio"
//   //               value="visa"
//   //               checked={selectedPaymentOption === 'visa'}
//   //               onChange={() => setSelectedPaymentOption('visa')}
//   //               className="form-radio text-blue-500 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
//   //             />
//   //             <FontAwesomeIcon icon={faCcVisa} className="text-2xl ml-2" />
//   //           </label>
//   //           <label className="flex items-center">
//   //             <input
//   //               type="radio"
//   //               value="mastercard"
//   //               checked={selectedPaymentOption === 'mastercard'}
//   //               onChange={() => setSelectedPaymentOption('mastercard')}
//   //               className="form-radio text-red-500 focus:outline-none focus:border-red-500 focus:ring focus:ring-red-200"
//   //             />
//   //             <FontAwesomeIcon icon={faCcMastercard} className="text-2xl ml-2" />
//   //           </label>
//   //         </div>
//   //       </div>
//   //       <button
//   //         type="button"
//   //         onClick={handlePayment}
//   //         className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none"
//   //       >
//   //         Pay Now
//   //       </button>
//   //     </form>
//   //   </div>
//   //   </>
//   // );

//   return (
//     <div className="max-w-md mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
//       <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Payment Details</h2>
//       <form>
//         <div className="mb-4">
//           <label className="block text-gray-600 text-sm font-semibold mb-2">Select Payment Method</label>
//           <div className="flex items-center space-x-4">
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 value="debitCard"
//                 checked={paymentMethod === 'debitCard'}
//                 onChange={() => setPaymentMethod('debitCard')}
//                 className="form-radio text-blue-500 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
//               />
//               Debit Card
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 value="upi"
//                 checked={paymentMethod === 'upi'}
//                 onChange={() => setPaymentMethod('upi')}
//                 className="form-radio text-green-500 focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200"
//               />
//               UPI
//             </label>
//           </div>
//         </div>
//         {paymentMethod === 'debitCard' && (
//           <>
//             <div className="mb-4">
//               <label htmlFor="cardNumber" className="block text-gray-600 text-sm font-semibold mb-2">
//                 Card Number
//               </label>
//               <input
//                 type="text"
//                 id="cardNumber"
//                 value={cardNumber}
//                 onChange={(e) => setCardNumber(e.target.value)}
//                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="grid grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label htmlFor="expiryDate" className="block text-gray-600 text-sm font-semibold mb-2">
//                   Expiry Date
//                 </label>
//                 <input
//                   type="text"
//                   id="expiryDate"
//                   value={expiryDate}
//                   onChange={(e) => setExpiryDate(e.target.value)}
//                   placeholder="MM/YY"
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="cvc" className="block text-gray-600 text-sm font-semibold mb-2">
//                   CVC
//                 </label>
//                 <input
//                   type="text"
//                   id="cvc"
//                   value={cvc}
//                   onChange={(e) => setCvc(e.target.value)}
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 />
//               </div>
//             </div>
//           </>
//         )}
//         {paymentMethod === 'upi' && (
//           <div className="mb-4">
//             <label htmlFor="upiId" className="block text-gray-600 text-sm font-semibold mb-2">
//               UPI ID
//             </label>
//             <input
//               type="text"
//               id="upiId"
//               value={upiId}
//               onChange={(e) => setUpiId(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
//             />
//           </div>
//         )}
//         <button
//           type="button"
//           onClick={handlePayment}
//           className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none"
//         >
//           Pay Now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Payment;

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCreditCard, faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons';


// const Payment = () => {
//   const [paymentMethod, setPaymentMethod] = useState('debitCard');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvc, setCvc] = useState('');
//   const [upiId, setUpiId] = useState('');

//   const handlePayment = () => {
//     // Handle payment processing (usually done on the server)
//     console.log('Processing payment...');
//   };

// //   return (
// //     <div className="max-w-md mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
// //       <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Payment Details</h2>
// //       <form>
// //         <div className="mb-4">
// //           <label className="block text-gray-600 text-sm font-semibold mb-2">Select Payment Method</label>
// //           <div className="flex items-center space-x-4">
// //             <label className="flex items-center">
// //               <input
// //                 type="radio"
// //                 value="debitCard"
// //                 checked={paymentMethod === 'debitCard'}
// //                 onChange={() => setPaymentMethod('debitCard')}
// //                 className="form-radio text-blue-500 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
// //               />
// //               Debit Card
// //             </label>
// //             <label className="flex items-center">
// //               <input
// //                 type="radio"
// //                 value="upi"
// //                 checked={paymentMethod === 'upi'}
// //                 onChange={() => setPaymentMethod('upi')}
// //                 className="form-radio text-green-500 focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200"
// //               />
// //               UPI
// //             </label>
// //           </div>
// //         </div>
// //         {paymentMethod === 'debitCard' && (
// //           <>
// //             <div className="mb-4">
// //               <label htmlFor="cardNumber" className="block text-gray-600 text-sm font-semibold mb-2">
// //                 Card Number
// //               </label>
// //               <input
// //                 type="text"
// //                 id="cardNumber"
// //                 value={cardNumber}
// //                 onChange={(e) => setCardNumber(e.target.value)}
// //                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// //               />
// //             </div>
// //             <div className="grid grid-cols-2 gap-4 mb-4">
// //               <div>
// //                 <label htmlFor="expiryDate" className="block text-gray-600 text-sm font-semibold mb-2">
// //                   Expiry Date
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="expiryDate"
// //                   value={expiryDate}
// //                   onChange={(e) => setExpiryDate(e.target.value)}
// //                   placeholder="MM/YY"
// //                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// //                 />
// //               </div>
// //               <div>
// //                 <label htmlFor="cvc" className="block text-gray-600 text-sm font-semibold mb-2">
// //                   CVC
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="cvc"
// //                   value={cvc}
// //                   onChange={(e) => setCvc(e.target.value)}
// //                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// //                 />
// //               </div>
// //             </div>
// //           </>
// //         )}
// //         {paymentMethod === 'upi' && (
// //           <div className="mb-4">
// //             <label htmlFor="upiId" className="block text-gray-600 text-sm font-semibold mb-2">
// //               UPI ID
// //             </label>
// //             <input
// //               type="text"
// //               id="upiId"
// //               value={upiId}
// //               onChange={(e) => setUpiId(e.target.value)}
// //               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
// //             />
// //           </div>
// //         )}
// //         <button
// //           type="button"
// //           onClick={handlePayment}
// //           className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none"
// //         >
// //           Pay Now
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// return (
//   <div className="max-w-md mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
//     <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Payment Details</h2>
//     <form>
//       <div className="mb-4">
//         <label className="block text-gray-600 text-sm font-semibold mb-2">Select Payment Method</label>
//         <div className="flex flex-col space-y-2">
//           <label className="flex items-center">
//             <input
//               type="radio"
//               value="debitCard"
//               checked={paymentMethod === 'debitCard'}
//               onChange={() => setPaymentMethod('debitCard')}
//               className="form-radio text-blue-500 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
//             />
//             Debit Card
//             <div className="flex items-center space-x-2 ml-4">
//               <FontAwesomeIcon icon={faCcVisa} className="text-2xl text-blue-500" />
//               <FontAwesomeIcon icon={faCcMastercard} className="text-2xl text-red-500" />
//             </div>
//           </label>
//           <label className="flex items-center">
//             <input
//               type="radio"
//               value="upi"
//               checked={paymentMethod === 'upi'}
//               onChange={() => setPaymentMethod('upi')}
//               className="form-radio text-green-500 focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200"
//             />
//             UPI
//             <div className="flex items-center space-x-2 ml-4">
//               <img
//                 src="path-to-upi-symbol.png" // Replace with the actual path to your UPI symbol image
//                 alt="UPI"
//                 className="h-8"
//               />
//             </div>
//           </label>
//         </div>
//       </div>
//       {paymentMethod === 'debitCard' && (
//         <>
//           {/* ... (unchanged code for debit card fields) */}
//         </>
//       )}
//       {paymentMethod === 'upi' && (
//         <div className="mb-4">
//           <label htmlFor="upiId" className="block text-gray-600 text-sm font-semibold mb-2">
//             UPI ID
//           </label>
//           <input
//             type="text"
//             id="upiId"
//             value={upiId}
//             onChange={(e) => setUpiId(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
//           />
//         </div>
//       )}
//       <button
//         type="button"
//         onClick={handlePayment}
//         className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none"
//       >
//         Pay Now
//       </button>
//     </form>
//   </div>
// );
// };

// export default Payment;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons';

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
    <div className="max-w-md mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
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
      </form>
    </div>
  );
};

export default Payment;

