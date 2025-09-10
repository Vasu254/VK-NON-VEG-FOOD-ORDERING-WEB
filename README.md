# GoCart - E-commerce Platform

A modern, full-featured e-commerce platform built with Next.js, featuring multi-vendor support, admin panel, and comprehensive order management.


## 🚀 Features

### For Customers

- **Product Browsing**: Browse products by category with detailed product pages
- **Shopping Cart**: Add, remove, and manage cart items
- **User Authentication**: Secure user registration and login
- **Address Management**: Save and manage multiple delivery addresses
- **Order Tracking**: Real-time order status updates
- **Product Reviews**: Rate and review purchased products
- **Coupon System**: Apply discount coupons at checkout

### For Vendors

- **Store Management**: Create and manage your online store
- **Product Management**: Add, edit, and manage product inventory
- **Order Management**: Process and fulfill customer orders
- **Analytics Dashboard**: View sales analytics and performance metrics

### For Admins

- **Store Approval**: Review and approve vendor applications
- **Coupon Management**: Create and manage discount coupons
- **System Overview**: Monitor platform-wide statistics
- **User Management**: Manage users and stores

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Database**: PostgreSQL with Prisma ORM
- **Icons**: Lucide React
- **Charts**: Recharts
- **Notifications**: React Hot Toast
- **Date Handling**: date-fns

## 📋 Prerequisites

- Node.js (version 18 or higher)
- PostgreSQL database
- npm or yarn package manager

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd gocart-main
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Configure the following variables in `.env.local`:

   ```env
   NEXT_PUBLIC_CURRENCY_SYMBOL = '$'
   DATABASE_URL = "postgresql://username:password@localhost:5432/gocart"
   DIRECT_URL = "postgresql://username:password@localhost:5432/gocart"
   ```

4. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks
- `npm run format` - Format code with Prettier

## 🏗️ Project Structure

```
gocart-main/
├── app/                    # Next.js app directory
│   ├── (public)/          # Public routes
│   ├── admin/             # Admin panel routes
│   └── store/             # Vendor store routes
├── components/            # Reusable React components
├── lib/                   # Utility functions and Redux store
├── prisma/                # Database schema and migrations
├── assets/                # Static assets (images, icons)
└── public/                # Public static files
```

## 🗄️ Database Schema

The application uses Prisma ORM with PostgreSQL. Key models include:

- **User**: Customer and vendor accounts
- **Product**: Store products with pricing and inventory
- **Order**: Customer orders with status tracking
- **Store**: Vendor store information
- **Address**: Customer delivery addresses
- **Rating**: Product reviews and ratings
- **Coupon**: Discount coupons and promotions

## 🔐 Authentication

The platform supports user authentication for:

- Customers (browsing, purchasing)
- Vendors (store management)
- Admins (platform management)

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop computers
- Tablets
- Mobile devices

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on:

- Code style and standards
- Pull request process
- Development workflow

## 📄 Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand our community standards.

## 📄 License

This project is private and proprietary.

## 🆘 Support

For support or questions:

- Create an issue in the repository
- Contact the development team

---

Built with ❤️ using Next.js and modern web technologies.
