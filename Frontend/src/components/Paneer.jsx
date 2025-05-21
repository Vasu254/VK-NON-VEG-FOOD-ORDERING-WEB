import React from "react";
import "./Biryani.css";

function Paneer() {
  return (
    <div className="biryani-page paneer-bg">
      <h1>Paneer Specials</h1>
      <div className="biryani-layouts">
        <div className="layout">
          <img
            src="https://www.cookwithmanali.com/wp-content/uploads/2019/02/Paneer-Butter-Masala-Restaurant-Style.jpg"
            alt="Paneer Butter Masala"
          />
          <h2>Paneer Butter Masala</h2>
          <p>Creamy paneer curry with rich tomato gravy.</p>
        </div>
        {/* Add more paneer items here if needed */}
      </div>
    </div>
  );
}

export default Paneer;
