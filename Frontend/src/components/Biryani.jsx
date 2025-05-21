import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import "./Biryani.css"; // Import the CSS file for Biryani page

function Biryani() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]); // State to manage cart items
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to check if authenticated

  // Sample biryani items with initial prices
  const [biryaniItems, setBiryaniItems] = useState([
    {
      id: 1,
      name: "Chicken Tikka Masala",
      description: "Rich and flavorful biryani with succulent mutton.",
      image:
        "https://scontent-pnq1-1.cdninstagram.com/v/t1.15752-9/482694131_3974490562810755_5934161960834529847_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=lQTn95uj2pQQ7kNvgEpHhEs&_nc_oc=AdisLfWKr98J03wDaQNX1Ujmoj-JkG-FHg8h4IM9WO6rz7taOrVmWXwWZ3Qo91w6B6E&_nc_zt=23&_nc_ht=scontent-pnq1-1.cdninstagram.com&oh=03_Q7cD1wFmLYlMEB2a4bLQDQVzDUWAqXgaZw6RNKkSzeVR40DeDw&oe=67FA280E",
      fullPlatePrice: 100, // Default full plate price
      halfPlatePrice: 70, // Default half plate price
    },

    {
      id: 1,
      name: "Chicken Tikka Masala",
      description: "Rich and flavorful biryani with succulent mutton.",
      image:
        "https://scontent-pnq1-1.cdninstagram.com/v/t1.15752-9/482694131_3974490562810755_5934161960834529847_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=lQTn95uj2pQQ7kNvgEpHhEs&_nc_oc=AdisLfWKr98J03wDaQNX1Ujmoj-JkG-FHg8h4IM9WO6rz7taOrVmWXwWZ3Qo91w6B6E&_nc_zt=23&_nc_ht=scontent-pnq1-1.cdninstagram.com&oh=03_Q7cD1wFmLYlMEB2a4bLQDQVzDUWAqXgaZw6RNKkSzeVR40DeDw&oe=67FA280E",
      fullPlatePrice: 100, // Default full plate price
      halfPlatePrice: 70, // Default half plate price
    },

    {
      id: 1,
      name: "Chicken Tikka Masala",
      description: "Rich and flavorful biryani with succulent mutton.",
      image:
        "https://scontent-pnq1-1.cdninstagram.com/v/t1.15752-9/482694131_3974490562810755_5934161960834529847_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=lQTn95uj2pQQ7kNvgEpHhEs&_nc_oc=AdisLfWKr98J03wDaQNX1Ujmoj-JkG-FHg8h4IM9WO6rz7taOrVmWXwWZ3Qo91w6B6E&_nc_zt=23&_nc_ht=scontent-pnq1-1.cdninstagram.com&oh=03_Q7cD1wFmLYlMEB2a4bLQDQVzDUWAqXgaZw6RNKkSzeVR40DeDw&oe=67FA280E",
      fullPlatePrice: 100, // Default full plate price
      halfPlatePrice: 70, // Default half plate price
    },
    // Add more items as needed
  ]);

  // Function to authenticate the manager
  const authenticateManager = (password) => {
    if (password === "vasu!@09") {
      setIsAuthenticated(true); // Allow price changes
      toast.success("Authentication successful! You can now update prices."); // Toast notification
    } else {
      toast.error("Incorrect password. Only the manager can update prices."); // Toast notification
    }
  };

  // Function to update prices for a specific item
  const updatePrices = (id, fullPlatePrice, halfPlatePrice) => {
    setBiryaniItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, fullPlatePrice, halfPlatePrice } : item
      )
    );
    toast.success("Prices updated successfully!"); // Toast notification
  };

  // Function to add item to cart
  const addToCart = (item, plateType) => {
    const price =
      plateType === "full" ? item.fullPlatePrice : item.halfPlatePrice;
    const newItem = {
      ...item,
      plateType,
      price, // Use the updated price
    };
    setCart([...cart, newItem]); // Add item to cart
    toast.success(`${item.name} (${plateType} plate) added to cart!`); // Toast notification
  };

  return (
    <div className="biryani-page">
      <h1>Grilled Chicken Brust</h1>
      <p>Explore our delicious biryani options.</p>

      {/* Manager Login */}
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

      {/* Biryani Items */}
      <div className="biryani-layouts">
        {biryaniItems.map((item) => (
          <div className="layout" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>

            {/* Price Update Form (Visible only to authenticated manager) */}
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

            {/* Add to Cart Buttons */}
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

      {/* Floating Cart Icon */}
      <div
        className="floating-cart-icon"
        onClick={() => navigate("/cart", { state: { cart } })}
      >
        🛒 <span className="cart-count">{cart.length}</span>
      </div>

      {/* Toast Container */}
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

export default Biryani;
