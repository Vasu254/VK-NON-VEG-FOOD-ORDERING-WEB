import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <h1 className="landing-title">Welcome to VKR Hotal</h1>
      <div className="landing-container">
        <div
          className="landing-box veg-box"
          onClick={() => navigate("/veg-menu")}
        >
          <h2>Veg Items</h2>
          <p>Explore our delicious vegetarian menu.</p>
        </div>
        <div
          className="landing-box nonveg-box"
          onClick={() => navigate("/home")}
        >
          <h2>Non Veg Items</h2>
          <p>Discover our mouth-watering non-veg specials.</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
