// src/components/Payment.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // To access cart data
import "./Payment.css"; // Import the CSS file for Payment page

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || []; // Get cart data from navigation state

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePaymentOptionClick = (option) => {
    alert(`You selected ${option} for payment!`);
    // Add logic to proceed with the selected payment option
  };

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
        <div className="payment-options">
          <button
            className="payment-option"
            onClick={() => handlePaymentOptionClick("PhonePe")}
          >
            PhonePe
          </button>
          <button
            className="payment-option"
            onClick={() => handlePaymentOptionClick("Google Pay")}
          >
            Google Pay
          </button>
          <button
            className="payment-option"
            onClick={() => handlePaymentOptionClick("Paytm")}
          >
            Paytm
          </button>
          <button
            className="payment-option"
            onClick={() => handlePaymentOptionClick("Credit/Debit Card")}
          >
            Credit/Debit Card
          </button>
        </div>
        <button className="back-to-cart" onClick={() => navigate("/cart")}>
          Back to Cart
        </button>
      </div>
    </div>
  );
}

export default Payment;
