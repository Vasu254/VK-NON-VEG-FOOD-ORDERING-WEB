import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Mutton.css";

function Mutton() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [muttonItems, setMuttonItems] = useState([
    {
      id: 1,
      name: "Mutton Rogan Josh",
      description: "Aromatic and rich mutton curry with traditional spices.",
      image: "https://example.com/mutton-rogan-josh.jpg", // Replace with actual image URL
      fullPlatePrice: 120,
      halfPlatePrice: 80,
    },
    {
      id: 2,
      name: "Mutton Biryani",
      description: "Flavorful biryani made with succulent mutton pieces.",
      image: "https://example.com/mutton-biryani.jpg", // Replace with actual image URL
      fullPlatePrice: 150,
      halfPlatePrice: 100,
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

  const filteredItems = muttonItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    <div className="biryani-page mutton-bg">
      <h1>Mutton Specials</h1>
      <p>Explore our delicious mutton dishes.</p>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search dishes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Mutton Items */}
      <div className="mutton-layouts">
        {filteredItems.map((item) => (
          <div className="layout" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>

            {/* Add to Cart Buttons */}
            <div className="button-group">
              <button
                className="btn full-plate"
                onClick={() => addToCart(item, "full")}
              >
                Full Plate (₹{item.fullPlatePrice})
              </button>
              <button
                className="btn half-plate"
                onClick={() => addToCart(item, "half")}
              >
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

export default Mutton;
