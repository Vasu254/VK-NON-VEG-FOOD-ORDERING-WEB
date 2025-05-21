// src/components/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1 className="home-title">Welcome to Delight Biryani</h1>
      <div className="container">
        <div className="box biryani-box" onClick={() => navigate("/biryani")}>
          <h2>Biryani Specials</h2>
          <p>Explore our delicious biryani dishes.</p>
        </div>
        <div className="box mutton-box" onClick={() => navigate("/mutton")}>
          <h2>Mutton Delights</h2>
          <p>Try our mouth-watering mutton dishes.</p>
        </div>
        <div className="box seafood-box" onClick={() => navigate("/seafood")}>
          <h2>Seafood Treats</h2>
          <p>Fresh and flavorful seafood options.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
