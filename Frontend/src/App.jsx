// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Biryani from "./components/Biryani";
import Mutton from "./components/Mutton";
import Cart from "./components/Cart";
import Seafood from "./components/Seafood";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar /> {/* Include Navbar for navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biryani" element={<Biryani />} />
        <Route path="/mutton" element={<Mutton />} />{" "}
        {/* Ensure path is lowercase */}
        <Route path="/seafood" element={<Seafood />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
