// src/components/Cart.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];
  const [selectedTable, setSelectedTable] = useState(null);
  const [showTableSelector, setShowTableSelector] = useState(false);

  // Calculate prices
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const servingCharge = 5;
  const gst = 10;
  const total = subtotal + servingCharge + gst;

  // Table numbers 1-25
  const tables = Array.from({ length: 25 }, (_, i) => i + 1);

  const handlePayment = () => {
    if (!selectedTable) {
      alert("Please select a table number");
      return;
    }
    navigate("/payment", {
      state: {
        cart,
        tableNumber: selectedTable,
        totalAmount: total,
      },
    });
  };

  return (
    <div className="cart-container">
      <div className="cart-content">
        <h1 className="cart-title">Your Order Summary</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button className="browse-button" onClick={() => navigate("/")}>
              Browse Menu
            </button>
          </div>
        ) : (
          <>
            <div className="items-list">
              {cart.map((item, index) => (
                <div className="cart-item" key={index}>
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p className="item-description">{item.description}</p>
                    <p className="item-type">{item.plateType} plate</p>
                  </div>
                  <p className="item-price">₹{item.price}</p>
                </div>
              ))}
            </div>

            <div className="payment-section">
              <div className="table-selection">
                <button
                  className="table-selector"
                  onClick={() => setShowTableSelector(!showTableSelector)}
                >
                  {selectedTable ? `Table ${selectedTable}` : "Select Table"}
                  <span
                    className={`arrow ${showTableSelector ? "up" : "down"}`}
                  >
                    ▼
                  </span>
                </button>

                {showTableSelector && (
                  <div className="table-grid">
                    {tables.map((table) => (
                      <div
                        key={table}
                        className={`table-number ${
                          selectedTable === table ? "selected" : ""
                        }`}
                        onClick={() => {
                          setSelectedTable(table);
                          setShowTableSelector(false);
                        }}
                      >
                        {table}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bill-summary">
                <div className="bill-row">
                  <span>Subtotal:</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="bill-row">
                  <span>Serving Charge:</span>
                  <span>₹{servingCharge}</span>
                </div>
                <div className="bill-row">
                  <span>GST:</span>
                  <span>₹{gst}</span>
                </div>
                <div className="bill-row total">
                  <span>Total:</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <button
                className="pay-button"
                onClick={handlePayment}
                disabled={!selectedTable}
              >
                Proceed to Payment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
