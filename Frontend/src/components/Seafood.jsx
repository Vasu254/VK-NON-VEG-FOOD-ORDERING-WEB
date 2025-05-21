import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Seafood.css";

function Seafood() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [seafoodItems, setSeafoodItems] = useState([
    {
      id: 1,
      name: "Grilled Salmon",
      description: "Freshly grilled salmon with lemon and herbs",
      image:
        "https://www.thespruceeats.com/thmb/ujHzh5QlX5zZxX3h0Q0jXJ5X5JQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grill-salmon-480709-hero-01-5c6b4b0046e0fb0001f5b2a2.jpg",
      fullPlatePrice: 200,
      halfPlatePrice: 120,
    },
    {
      id: 2,
      name: "Prawn Curry",
      description: "Spicy prawn curry with coconut milk",
      image:
        "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/shaheen_ali/Prawns_Coconut_Curry_Recipe.jpg",
      fullPlatePrice: 180,
      halfPlatePrice: 100,
    },
    {
      id: 3,
      name: "Fish Tacos",
      description: "Crispy fish with fresh salsa in soft tortillas",
      image:
        "https://www.simplyrecipes.com/thmb/1uZj1XlV0hP5kK4S8rV3WkH2k2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Fish-Tacos-LEAD-2-3a5f1e5a11a84a4d8a0f1a5c5f5b5b5e.jpg",
      fullPlatePrice: 150,
      halfPlatePrice: 90,
    },
  ]);

  const authenticateManager = (password) => {
    if (password === "vasu!@09") {
      setIsAuthenticated(true);
      toast.success("Authentication successful! You can now update prices.");
    } else {
      toast.error("Incorrect password. Only the manager can update prices.");
    }
  };

  const updatePrices = (id, fullPlatePrice, halfPlatePrice) => {
    setSeafoodItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, fullPlatePrice, halfPlatePrice } : item
      )
    );
    toast.success("Prices updated successfully!");
  };

  const addToCart = (item, plateType) => {
    const price =
      plateType === "full" ? item.fullPlatePrice : item.halfPlatePrice;
    const newItem = {
      ...item,
      plateType,
      price,
    };
    setCart([...cart, newItem]);
    toast.success(`${item.name} (${plateType} plate) added to cart!`);
  };

  return (
    <div className="biryani-page seafood-bg">
      <h1>Enjoy Our Seafood Specialties</h1>
      <p>Fresh from the ocean to your plate</p>

      {!isAuthenticated && (
        <div className="manager-login">
          <b>Manager Login</b>
          <input
            type="password"
            placeholder="Enter password"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                authenticateManager(e.target.value);
              }
            }}
          />
        </div>
      )}

      <div className="seafood-layouts">
        {seafoodItems.map((item) => (
          <div className="layout" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>

            {isAuthenticated && (
              <div className="price-update-form">
                <label>
                  Full Plate Price:
                  <input
                    type="number"
                    value={item.fullPlatePrice}
                    onChange={(e) =>
                      updatePrices(
                        item.id,
                        Number(e.target.value),
                        item.halfPlatePrice
                      )
                    }
                  />
                </label>
                <label>
                  Half Plate Price:
                  <input
                    type="number"
                    value={item.halfPlatePrice}
                    onChange={(e) =>
                      updatePrices(
                        item.id,
                        item.fullPlatePrice,
                        Number(e.target.value)
                      )
                    }
                  />
                </label>
              </div>
            )}

            <div className="button-group">
              <button onClick={() => addToCart(item, "full")}>
                Full Plate (₹{item.fullPlatePrice})
              </button>
              <button onClick={() => addToCart(item, "half")}>
                Half Plate (₹{item.halfPlatePrice})
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        className="floating-cart-icon"
        onClick={() => navigate("/cart", { state: { cart } })}
      >
        🛒 <span className="cart-count">{cart.length}</span>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Seafood;
