// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css"; // Import the CSS file for Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Welcome to Hotel VKR</h1>
      </div>
      <div className="navbar-right">
        {/* <span role="img" aria-label="cart">
          🛒
        </span>{" "}
        Add to Cart symbol */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          class="bi bi-cart-check-fill"
          viewBox="0 0 16 16"
        >
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708" />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
