# 🛠️ Admin Dashboard - Trendify E-Commerce

<div align="center">
  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/github/license/MenathNDGD/MERN-Ecommerce)

</div>

<div align="center">
  <img src="../frontend/src/assets/logo.png" alt="Trendify Admin" width="200"/>
</div>

<p align="center">Admin dashboard for the Trendify e-commerce platform built with React, Vite, and Tailwind CSS.</p>

---

## 📋 Overview

The Admin Dashboard is a comprehensive management interface that allows administrators to control all aspects of the e-commerce platform. It provides tools for product management, order processing, and analytics.

<div align="center">
  <img src="./src/assets/logo.png" alt="Admin Dashboard Preview" width="70%"/>
</div>

---

## 🏗️ Architecture

### Component Structure

```mermaid
graph TD
    A[App.jsx] --> B[Navbar]
    A --> C[Sidebar]
    A --> D[Routes]
    D --> E[Add Products]
    D --> F[List Products]
    D --> G[Orders]
    A --> H[Login]
    
    style A fill:#2196F3,stroke:#0D47A1
    style B fill:#4CAF50,stroke:#2E7D32
    style C fill:#4CAF50,stroke:#2E7D32
    style D fill:#FF9800,stroke:#E65100
    style E fill:#9C27B0,stroke:#6A1B9A
    style F fill:#9C27B0,stroke:#6A1B9A
    style G fill:#9C27B0,stroke:#6A1B9A
    style H fill:#F44336,stroke:#B71C1C
```

### Data Flow

```mermaid
sequenceDiagram
    participant Admin
    participant Frontend
    participant Backend
    participant Database
    participant Cloudinary
    participant Stripe
    
    Admin->>Frontend: Interacts with UI
    Frontend->>Backend: API Requests
    Backend->>Database: CRUD Operations
    Backend->>Cloudinary: Image Uploads
    Backend->>Stripe: Payment Processing
    Database-->>Backend: Data Response
    Backend-->>Frontend: API Response
    Frontend-->>Admin: Updated UI
```

---

## 🚀 Key Features

### 🔧 Product Management
- **Add Products**: Create new products with images, pricing, and categorization
- **Edit Products**: Update existing product information
- **Remove Products**: Delete products from the catalog
- **Product Listing**: View all products in a sortable table

### 📦 Order Management
- **Order Tracking**: View all customer orders
- **Order Status Updates**: Update order fulfillment status
- **Order Details**: Access detailed order information

### 👥 User Management
- **Access Control**: Role-based permissions
- **User Accounts**: Manage customer accounts

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | Frontend library for building UI components |
| **Vite** | Build tool for fast development and production builds |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **React Router** | Navigation and routing |
| **Axios** | HTTP client for API requests |

---

## 📁 Project Structure

```
admin/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable UI components
│   │   ├── Login.jsx    # Authentication component
│   │   ├── Navbar.jsx   # Top navigation bar
│   │   └── Sidebar.jsx  # Side navigation menu
│   ├── pages/           # Main page components
│   │   ├── Add.jsx      # Add products page
│   │   ├── List.jsx     # List products page
│   │   └── Orders.jsx   # View orders page
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

---

## ▶️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Navigate to admin directory
cd admin

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
# Runs on http://localhost:5174
```

### Production Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Environment Variables

Create a `.env` file in the admin directory:

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## 🔄 API Integration

The admin dashboard communicates with the backend API for all data operations:

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/product/add` | POST | Add new products |
| `/api/product/list` | GET | Retrieve all products |
| `/api/product/remove` | DELETE | Remove products |
| `/api/order/list` | GET | Retrieve all orders |
| `/api/user/login` | POST | Admin authentication |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.