// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Biryani from "./components/Biryani";
import Mutton from "./components/Mutton";
import Cart from "./components/Cart";
// import Seafood from "./components/Seafood";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <React path="/Seafood" element={<Seafood />} /> */}
        <Route path="/biryani" element={<Biryani />} />
        <Route path="/Mutton" element={<Mutton />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
