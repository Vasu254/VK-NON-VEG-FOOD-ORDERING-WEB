import React from "react";
import "./Biryani.css";

function VegCurries() {
  return (
    <div className="biryani-page curries-bg">
      <h1>Veg Curries</h1>
      <div className="biryani-layouts">
        <div className="layout">
          <img
            src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/mix-veg-recipe-1.jpg"
            alt="Mix Veg Curry"
          />
          <h2>Mix Veg Curry</h2>
          <p>Seasonal vegetables cooked in a flavorful curry.</p>
        </div>
        {/* Add more veg curry items here if needed */}
      </div>
    </div>
  );
}

export default VegCurries;
