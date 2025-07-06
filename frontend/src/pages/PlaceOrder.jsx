import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import CartTotal from '../Components/CartTotal';
import Title from '../Components/Title';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const { addOrder } = useContext(ShopContext);

  const handlePlaceOrder = () => {
    const inputs = document.querySelectorAll('input');
    const deliveryDetails = {
      firstName: inputs[0].value,
      lastName: inputs[1].value,
      email: inputs[2].value,
      street: inputs[3].value,
      city: inputs[4].value,
      state: inputs[5].value,
      zipcode: inputs[6].value,
      country: inputs[7].value,
      phone: inputs[8].value,
    };

    addOrder(paymentMethod, deliveryDetails);
  };

  return (
    <div className="w-full min-h-[80vh] px-4 py-10 border-t">
      <div className="flex flex-col lg:flex-row justify-between gap-8">

        {/* Delivery Info */}
        <div className="flex-1 max-w-xl">
          <Title text1="DELIVERY" text2="INFORMATION" />
          <form className="mt-4 flex flex-col gap-4">
            <div className="flex gap-3">
              <input type="text" placeholder="First name" className="border px-4 py-2 w-full" />
              <input type="text" placeholder="Last name" className="border px-4 py-2 w-full" />
            </div>
            <input type="email" placeholder="Email address" className="border px-4 py-2 w-full" />
            <input type="text" placeholder="Street" className="border px-4 py-2 w-full" />
            <div className="flex gap-3">
              <input type="text" placeholder="City" className="border px-4 py-2 w-full" />
              <input type="text" placeholder="State" className="border px-4 py-2 w-full" />
            </div>
            <div className="flex gap-3">
              <input type="text" placeholder="Zipcode" className="border px-4 py-2 w-full" />
              <input type="text" placeholder="Country" className="border px-4 py-2 w-full" />
            </div>
            <input type="text" placeholder="Phone" className="border px-4 py-2 w-full" />
          </form>
        </div>

        {/* Cart Total & Payment Method */}
        <div className="flex-1 max-w-xl">
          <div className="mb-10">
            <CartTotal />
          </div>

          <div className="mb-6">
            <Title text1="PAYMENT" text2="METHOD" />
            <div className="flex flex-wrap gap-4 mt-4">

              <button
                onClick={() => setPaymentMethod("stripe")}
                className={`flex items-center gap-2 px-4 py-2 border rounded-md w-fit ${
                  paymentMethod === "stripe" ? "ring-2 ring-black" : ""
                }`}
              >
                <img src={assets.stripe_logo} alt="stripe" className="h-5" />
              </button>

              <button
                onClick={() => setPaymentMethod("razorpay")}
                className={`flex items-center gap-2 px-4 py-2 border rounded-md w-fit ${
                  paymentMethod === "razorpay" ? "ring-2 ring-black" : ""
                }`}
              >
                <img src={assets.razorpay_logo} alt="razorpay" className="h-5" />
              </button>

              <button
                onClick={() => setPaymentMethod("cod")}
                className={`flex items-center gap-2 px-4 py-2 border rounded-md w-fit ${
                  paymentMethod === "cod" ? "ring-2 ring-black" : ""
                }`}
              >
                <div className="w-4 h-4 rounded-full border border-black flex items-center justify-center">
                  {paymentMethod === "cod" && (
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  )}
                </div>
                <p className="text-sm font-medium">CASH ON DELIVERY</p>
              </button>
            </div>
          </div>

          <div className="text-end mt-6">
            <button
              onClick={handlePlaceOrder}
              className="bg-black text-white px-10 py-3"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
