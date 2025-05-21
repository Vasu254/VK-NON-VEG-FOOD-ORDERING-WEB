// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Biryani from "./components/Biryani";
import Mutton from "./components/Mutton";
import Cart from "./components/Cart";
import Seafood from "./components/Seafood";
import Navbar from "./components/Navbar";
import Payment from "./components/Payment";
import Landing from "./components/Landing";
import VegMenu from "./components/VegMenu";
import VegBiryani from "./components/VegBiryani";
import Paneer from "./components/Paneer";
import VegCurries from "./components/VegCurries";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/biryani" element={<Biryani />} />
        <Route path="/mutton" element={<Mutton />} />
        <Route path="/seafood" element={<Seafood />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/veg-menu" element={<VegMenu />} />
        <Route path="/veg-biryani" element={<VegBiryani />} />
        <Route path="/paneer" element={<Paneer />} />
        <Route path="/veg-curries" element={<VegCurries />} />
      </Routes>
    </>
  );
}

export default App;
