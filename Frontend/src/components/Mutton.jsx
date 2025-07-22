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
      image:
        "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg", // Replace with actual image URL
      fullPlatePrice: 120,
      halfPlatePrice: 80,
    },
    {
      id: 2,
      name: "Mutton Biryani",
      description: "Flavorful biryani made with succulent mutton pieces.",
      image:
        "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg", // Replace with actual image URL
      fullPlatePrice: 150,
      halfPlatePrice: 100,
    },
    {
      id: 1,
      name: "Mutton Tikka Masala",
      description: "Rich and flavorful Mutton with succulent mutton.",
      image:
        "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg",
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
