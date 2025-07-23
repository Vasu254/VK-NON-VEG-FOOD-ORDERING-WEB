# VK-NON-VEG-FOOD-ORDERING-WEB

A full-stack food ordering web application for Hotel VKR, supporting both vegetarian and non-vegetarian menus. Built with React (Vite) for the frontend and Node.js/Express with MongoDB for the backend. Orders are also exported to Excel for easy management.

---

## Features

- 🍛 **Menu Browsing:** Separate Veg and Non-Veg menus with categories (Biryani, Mutton, Seafood, Paneer, Curries, etc.)
- 🛒 **Cart & Table Selection:** Add items to cart, select table number, and view detailed bill with GST and serving charges.
- 💳 **Payment Options:** Multiple payment methods (PhonePe, Google Pay, Paytm, Card).
- 🔍 **Search Option is avaiable for item search.
- 📦 **Order Storage:** Orders saved to MongoDB and exported to Excel (`orders.xlsx`).
- 📱 **Responsive UI:** Mobile-friendly, modern design with React and CSS.
- 🔔 **Notifications:** Toast notifications for actions (add to cart, errors, etc.).

---

## Tech Stack

- **Frontend:** React 19, Vite, React Router, React Toastify, CSS
- **Backend:** Node.js, Express, MongoDB (Mongoose), ExcelJS
- **Other:** CORS, ESLint

---

## Project Structure

## Getting Started
### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or remote)
### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/VK-NON-VEG-FOOD-ORDERING-WEB.git
cd VK-NON-VEG-FOOD-ORDERING-WEB


SETUP BACKEND:
cd Backend
npm install
npm start

SETUP FRONTEND
CD Frontend
npm install
npm run dev

The frontend runs on http://localhost:5173 (default Vite port).
Usage
Open the frontend URL in your browser.
Browse Veg/Non-Veg menus, add items to cart.
Select your table, review your order, and proceed to payment.
Orders are saved to MongoDB and exported to orders.xlsx in the backend directory.
Customization
Manager Password: Change the manager password in Veg.jsx.
Menu Items: Edit or add menu items in the respective component files in Frontend/src/components/.
Database: Update MongoDB connection string in server.js if needed.
License
MIT License

Author
Vasu Kumar

Acknowledgements

React
Vite
Express
MongoDB
ExcelJS

You can copy and use this as your [README.md](http://_vscodecontentref_/8). Be sure to update the author and repository URL as needed.

