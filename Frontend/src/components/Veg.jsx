import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Biryani.css";

function Veg() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [vegItems, setVegItems] = useState([
    {
      id: 1,
      name: "Veg Biryani",
      description: "Aromatic rice with fresh vegetables and spices.",
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/veg-biryani-recipe.jpg",
      fullPlatePrice: 80,
      halfPlatePrice: 50,
    },
    {
      id: 2,
      name: "Paneer Butter Masala",
      description: "Creamy paneer curry with rich tomato gravy.",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2019/02/Paneer-Butter-Masala-Restaurant-Style.jpg",
      fullPlatePrice: 100,
      halfPlatePrice: 60,
    },
    {
      id: 3,
      name: "Mix Veg Curry",
      description: "Seasonal vegetables cooked in a flavorful curry.",
      image:
        "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/mix-veg-recipe-1.jpg",
      fullPlatePrice: 90,
      halfPlatePrice: 55,
    },
    // Add more veg items as needed
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
    setVegItems((prevItems) =>
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
    <div className="biryani-page">
      <h1>Veg Menu</h1>
      <p>Explore our delicious vegetarian options.</p>
      {!isAuthenticated && (
        <div className="manager-login">
          <h3>Manager Login</h3>
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
      <div className="biryani-layouts">
        {vegItems.map((item) => (
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

export default Veg;
