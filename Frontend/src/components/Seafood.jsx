// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import "./SeaFood.css"; // Import the CSS file for SeaFood page

// // function SeaFood() {
// //   const navigate = useNavigate();
// //   const [cart, setCart] = useState([]); // State to manage cart items
// //   const [isAuthenticated, setIsAuthenticated] = useState(false); // State to check if authenticated

// //   // Sample seafood items with initial prices
// //   const [seaFoodItems, setSeaFoodItems] = useState([
// //     {
// //       id: 1,
// //       name: "Grilled Salmon",
// //       description: "Freshly grilled salmon with a hint of lemon and herbs.",
// //       image: "https://example.com/grilled-salmon.jpg", // Replace with actual image URL
// //       fullPlatePrice: 200, // Default full plate price
// //       halfPlatePrice: 120, // Default half plate price
// //     },
// //     {
// //       id: 2,
// //       name: "Prawn Curry",
// //       description: "Spicy and flavorful prawn curry with coconut milk.",
// //       image: "https://example.com/prawn-curry.jpg", // Replace with actual image URL
// //       fullPlatePrice: 180, // Default full plate price
// //       halfPlatePrice: 100, // Default half plate price
// //     },
// //     // Add more items as needed
// //   ]);

// //   // Function to authenticate the manager
// //   const authenticateManager = (password) => {
// //     if (password === "vasu!@09") {
// //       setIsAuthenticated(true); // Allow price changes
// //       toast.success("Authentication successful! You can now update prices."); // Toast notification
// //     } else {
// //       toast.error("Incorrect password. Only the manager can update prices."); // Toast notification
// //     }
// //   };

// //   // Function to update prices for a specific item
// //   const updatePrices = (id, fullPlatePrice, halfPlatePrice) => {
// //     setSeaFoodItems((prevItems) =>
// //       prevItems.map((item) =>
// //         item.id === id ? { ...item, fullPlatePrice, halfPlatePrice } : item
// //       )
// //     );
// //     toast.success("Prices updated successfully!"); // Toast notification
// //   };

// //   // Function to add item to cart
// //   const addToCart = (item, plateType) => {
// //     const price =
// //       plateType === "full" ? item.fullPlatePrice : item.halfPlatePrice;
// //     const newItem = {
// //       ...item,
// //       plateType,
// //       price, // Use the updated price
// //     };
// //     setCart([...cart, newItem]); // Add item to cart
// //     toast.success(`${item.name} (${plateType} plate) added to cart!`); // Toast notification
// //   };

// //   return (
// //     <div className="sea-food-page">
// //       <h1>Sea Food Specials</h1>
// //       <p>Explore our delicious seafood options.</p>

// //       {/* Manager Login */}
// //       {!isAuthenticated && (
// //         <div className="manager-login">
// //           <h3>Manager Login</h3>
// //           <input
// //             type="password"
// //             placeholder="Enter password"
// //             onKeyDown={(e) => {
// //               if (e.key === "Enter") {
// //                 authenticateManager(e.target.value);
// //               }
// //             }}
// //           />
// //         </div>
// //       )}

// //       {/* Sea Food Items */}
// //       <div className="sea-food-layouts">
// //         {seaFoodItems.map((item) => (
// //           <div className="layout" key={item.id}>
// //             <img src={item.image} alt={item.name} />
// //             <h2>{item.name}</h2>
// //             <p>{item.description}</p>

// //             {/* Price Update Form (Visible only to authenticated manager) */}
// //             {isAuthenticated && (
// //               <div className="price-update-form">
// //                 <label>
// //                   Full Plate Price:
// //                   <input
// //                     type="number"
// //                     value={item.fullPlatePrice}
// //                     onChange={(e) =>
// //                       updatePrices(
// //                         item.id,
// //                         Number(e.target.value),
// //                         item.halfPlatePrice
// //                       )
// //                     }
// //                   />
// //                 </label>
// //                 <label>
// //                   Half Plate Price:
// //                   <input
// //                     type="number"
// //                     value={item.halfPlatePrice}
// //                     onChange={(e) =>
// //                       updatePrices(
// //                         item.id,
// //                         item.fullPlatePrice,
// //                         Number(e.target.value)
// //                       )
// //                     }
// //                   />
// //                 </label>
// //               </div>
// //             )}

// //             {/* Add to Cart Buttons */}
// //             <div className="button-group">
// //               <button onClick={() => addToCart(item, "full")}>
// //                 Full Plate (₹{item.fullPlatePrice})
// //               </button>
// //               <button onClick={() => addToCart(item, "half")}>
// //                 Half Plate (₹{item.halfPlatePrice})
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Floating Cart Icon */}
// //       <div
// //         className="floating-cart-icon"
// //         onClick={() => navigate("/cart", { state: { cart } })}
// //       >
// //         🛒 <span className="cart-count">{cart.length}</span>
// //       </div>

// //       {/* Toast Container */}
// //       <ToastContainer
// //         position="top-right"
// //         autoClose={2000}
// //         hideProgressBar={false}
// //         newestOnTop={false}
// //         closeOnClick
// //         rtl={false}
// //         pauseOnFocusLoss
// //         draggable
// //         pauseOnHover
// //       />
// //     </div>
// //   );
// // }

// // export default SeaFood;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./SeaFood.css";

// function SeaFood() {
//   const navigate = useNavigate();
//   const [cart, setCart] = useState([]);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const [seaFoodItems, setSeaFoodItems] = useState([
//     {
//       id: 1,
//       name: "Grilled Salmon",
//       description: "Freshly grilled salmon with a hint of lemon and herbs.",
//       image: "https://example.com/grilled-salmon.jpg", // Replace with actual image URL
//       fullPlatePrice: 200,
//       halfPlatePrice: 120,
//     },
//     {
//       id: 2,
//       name: "Prawn Curry",
//       description: "Spicy and flavorful prawn curry with coconut milk.",
//       image: "https://example.com/prawn-curry.jpg", // Replace with actual image URL
//       fullPlatePrice: 180,
//       halfPlatePrice: 100,
//     },
//   ]);

//   const authenticateManager = (password) => {
//     if (password === "vasu!@09") {
//       setIsAuthenticated(true);
//       toast.success("Authentication successful! You can now update prices.");
//     } else {
//       toast.error("Incorrect password. Only the manager can update prices.");
//     }
//   };

//   const updatePrices = (id, fullPlatePrice, halfPlatePrice) => {
//     setSeaFoodItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, fullPlatePrice, halfPlatePrice } : item
//       )
//     );
//     toast.success("Prices updated successfully!");
//   };

//   const addToCart = (item, plateType) => {
//     const price =
//       plateType === "full" ? item.fullPlatePrice : item.halfPlatePrice;
//     const newItem = {
//       ...item,
//       plateType,
//       price,
//     };
//     setCart([...cart, newItem]);
//     toast.success(`${item.name} (${plateType} plate) added to cart!`);
//   };

//   return (
//     <div className="sea-food-page">
//       <h1>Sea Food Specials</h1>
//       <p>Explore our delicious seafood options.</p>

//       <div className="sea-food-layouts">
//         {seaFoodItems.map((item) => (
//           <div className="layout" key={item.id}>
//             <img src={item.image} alt={item.name} />
//             <h2>{item.name}</h2>
//             <p>{item.description}</p>
//             <div className="button-group">
//               <button onClick={() => addToCart(item, "full")}>
//                 Full Plate (₹{item.fullPlatePrice})
//               </button>
//               <button onClick={() => addToCart(item, "half")}>
//                 Half Plate (₹{item.halfPlatePrice})
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <ToastContainer />
//     </div>
//   );
// }

// export default SeaFood;
