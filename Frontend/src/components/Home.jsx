// src/components/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Home.css"; // Import the CSS file for Home component

function Home() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="home-page">
      <div className="container">
        <div className="box" onClick={() => navigate("/biryani")}>
          {" "}
          {/* Make the entire layout clickable */}
          <h2>Biriyani</h2>
          <p>Indulge in flavorful biriyani recipes.</p>
          <button>Explore</button>
        </div>
        <div className="box" onClick={() => navigate("/Mutton")}>
          {" "}
          {/* Make the entire layout clickable */}
          <h2>Mutton</h2>
          <p>Savor the richness of mutton dishes</p>
          <button>Explore</button>
        </div>
        <div className="box" onClick={() => navigate("/Seafood")}>
          {" "}
          {/* Make the entire layout clickable */}
          <h2>Seafood</h2>
          <p>Indulge in flavorful biriyani recipes.</p>
          <button>Explore</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Home.css";

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="home-page">
//       <h1>Welcome to Our Restaurant</h1>
//       <p>Explore our delicious menu options.</p>

//       <div className="menu-options">
//         <button onClick={() => navigate("/biryani")}>Biryani Specials</button>
//         <button onClick={() => navigate("/mutton")}>Mutton Specials</button>
//         <button onClick={() => navigate("/seafood")}>
//           Sea Food Specials
//         </button>{" "}
//         {/* Add button for SeaFood */}
//       </div>

//       {/* Optional: Add a link to the cart */}
//       <div className="floating-cart-icon" onClick={() => navigate("/cart")}>
//         🛒
//       </div>
//     </div>
//   );
// }

// export default Home;
