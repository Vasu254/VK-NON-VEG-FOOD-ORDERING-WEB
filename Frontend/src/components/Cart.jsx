// src/components/Cart.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // To access cart data and navigate
import "./Cart.css"; // Import the CSS file for Cart page

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || []; // Get cart data from navigation state

  // Calculate subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  // Additional charges
  const servingCharge = 5; // ₹5 serving charge
  const gst = 10; // ₹10 GST
  const total = subtotal + servingCharge + gst; // Total amount

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>
                {item.plateType} plate - ₹{item.price}
              </p>
            </div>
          ))}
          <div className="summary">
            <h3>Subtotal: ₹{subtotal}</h3>
            <p>Serving Charge: ₹{servingCharge}</p>
            <p>GST: ₹{gst}</p>
            <h3>Total: ₹{total}</h3>
          </div>
          <button
            className="pay-now-button"
            onClick={() => navigate("/payment", { state: { cart } })}
          >
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
