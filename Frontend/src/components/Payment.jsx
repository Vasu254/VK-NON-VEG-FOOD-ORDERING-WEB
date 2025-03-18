// src/components/Payment.jsx
import React from "react";
import { useLocation } from "react-router-dom"; // To access cart data
import "./Payment.css"; // Import the CSS file for Payment page

function Payment() {
  const location = useLocation();
  const cart = location.state?.cart || []; // Get cart data from navigation state

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      <div className="payment-details">
        <h2>Order Summary</h2>
        {cart.map((item, index) => (
          <div className="payment-item" key={index}>
            <h3>{item.name}</h3>
            <p>
              {item.plateType} plate - ₹{item.price}
            </p>
          </div>
        ))}
        <h3>Total: ₹{totalPrice}</h3>
        <button className="pay-now-button">Pay Now</button>
      </div>
    </div>
  );
}

export default Payment;
