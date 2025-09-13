// import logo from './logo.svg';
import "./App.css";
// import Background from "./components/Background";
import About from "./components/About";
import Orders from "./components/Orders";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Items from "./components/Items";
import Cart from "./components/Cart";
import Login from "./components/Login";
// import Profile from "./components/Profile";
import Error from "./components/Error";
import Vegetarian from "./components/Vegetarian";
import NonVegetarian from "./components/NonVegetarian";
import AllItems from "./components/AllItems";
import { AuthProvider } from "./components/Auth";
import NewUser from "./components/NewUser";
import Footer from "./components/Footer";
import CheckOut from "./components/CheckOut";
import Profile from './components/Profile'
// import { Shimmer } from "./components/Shimmer";
// import Footer from "./components/Footer";
// import data from './utils/data.json'

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <div className="container mt-5"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="orders" element={<Orders />} />
          <Route path="items" element={<Items />}>
            <Route index element={<AllItems />} />
            <Route path="veg" element={<Vegetarian />} />
            <Route path="allitems" element={<AllItems />} />
            <Route path="nonveg" element={<NonVegetarian />} />
          </Route>
          <Route path="cart" element={<Cart />}>
            <Route path="checkout" element={<CheckOut />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="newuser" element={<NewUser />} />
          <Route path="profile" element={<Profile />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
      <Footer />
    </>
  );
}

export default App;
