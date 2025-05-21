import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function VegMenu() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <h1 className="home-title">Veg Menu</h1>
      <div className="container">
        <div
          className="box biryani-box"
          onClick={() => navigate("/veg-biryani")}
        >
          <h2>Veg Biryani</h2>
          <p>Fragrant rice with fresh vegetables and spices.</p>
        </div>
        <div
          className="box"
          style={{
            background: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
          }}
          onClick={() => navigate("/paneer")}
        >
          <h2>Paneer Specials</h2>
          <p>Delicious paneer dishes for every taste.</p>
        </div>
        <div
          className="box"
          style={{
            background: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
          }}
          onClick={() => navigate("/veg-curries")}
        >
          <h2>Veg Curries</h2>
          <p>Rich and creamy vegetarian curries.</p>
        </div>
      </div>
    </div>
  );
}

export default VegMenu;
