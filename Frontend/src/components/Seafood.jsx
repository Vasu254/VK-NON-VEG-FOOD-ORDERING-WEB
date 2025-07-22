import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Seafood.css";

function Seafood() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [seafoodItems, setSeafoodItems] = useState([
    {
      id: 1,
      name: "Grilled Salmon",
      description: "Freshly grilled salmon with lemon and herbs",
      image:
        "https://s3.eu-central-1.amazonaws.com/qatar-delicious/ItemsImages/ItemImage_3661_(0).jpg",
      fullPlatePrice: 200,
      halfPlatePrice: 120,
    },
    {
      id: 2,
      name: "Prawn Curry",
      description: "Spicy prawn curry with coconut milk",
      image:
        "https://s3.eu-central-1.amazonaws.com/qatar-delicious/ItemsImages/ItemImage_3661_(0).jpg",
      fullPlatePrice: 180,
      halfPlatePrice: 100,
    },
    {
      id: 3,
      name: "Fish Tacos",
      description: "Crispy fish with fresh salsa in soft tortillas",
      image:
        "https://s3.eu-central-1.amazonaws.com/qatar-delicious/ItemsImages/ItemImage_3661_(0).jpg",
      fullPlatePrice: 150,
      halfPlatePrice: 90,
    },
  ]);

  const filteredItems = seafoodItems.filter((item) =>
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
    <div className="biryani-page seafood-bg">
      <h1>Enjoy Our Seafood Specialties</h1>
      <p>Fresh from the ocean to your plate</p>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search seafood dishes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="seafood-layouts">
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
